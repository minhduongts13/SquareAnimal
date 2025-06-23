// GameObject.ts
import Transform from "../component/Transform";

class GameObject implements Engine.IGameObject {
    protected components: Engine.IComponent[];
    protected children: Engine.IGameObject[];
    protected renderer: Engine.IRenderer;
    protected transform: Transform;

    constructor(
        transform: Transform,
    ) {
        this.components = [];
        this.children = [];
        this.transform = transform;
    }

    addComponent(component: Engine.IComponent){
        this.components.push(component);
    }

    addChild(child: GameObject){
        this.children.push(child);
    }

    update(){
        
        for (const component of this.components){
            component.update();
        }
        for (const child of this.children){
            child.update();
        }
        this.renderer.update();
        this.transform.update();

    }

    render(){
        this.renderer.render(this.transform.position.x, this.transform.position.y);
    }

    public get getTransform(){
        return this.transform;
    }

    public getComponent<T extends Engine.IComponent>(ctor: Function): T | undefined {
        return this.components.find(c => c instanceof ctor) as T | undefined;
    }
}
export default GameObject;