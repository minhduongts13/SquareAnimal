// GameObject.ts
import Component from "./Component";
import Transform from "./Transform";
import SpriteRenderer from "./SpriteRenderer";
import Pointer from "./Pointer";
import InputHandler from "./InputHandler";

class GameObject {
    protected components: Component[];
    protected children: GameObject[];
    protected spriteRenderer: SpriteRenderer;
    protected transform: Transform;
    protected layer: number = 0;

    constructor(transform : Transform, spriteRenderer : SpriteRenderer = new SpriteRenderer("../../assets/images/phaser-logo.png", 222, 190, 1), layer: number = 0 ){
        this.components = [];
        this.children = [];
        this.spriteRenderer = spriteRenderer;
        this.transform = transform;
    }

    addComponent(component: Component){
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
        this.spriteRenderer.update();
        this.transform.update();

    }

    render(){
        this.spriteRenderer.render(this.transform.position.x, this.transform.position.y);
    }

    get getTransform(){
        return this.transform;
    }

    getComponent<T extends Component>(ctor: Function): T | undefined {
        return this.components.find(c => c instanceof ctor) as T | undefined;
    }
}
export default GameObject;