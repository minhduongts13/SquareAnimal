// GameObject.ts
import Component from "./Component";
import Transform from "./Transform";
import SpriteRenderer from "./SpriteRenderer";
import Pointer from "./Pointer";

class GameObject {
    private components: Component[];
    private children: GameObject[];
    private spriteRenderer: SpriteRenderer;
    private transform: Transform;

    constructor(){
        this.components = [];
        this.children = [];
        this.spriteRenderer = new SpriteRenderer("../../assets/images/phaser-logo.png", 222, 190, 1);
        this.transform = new Transform(Pointer.position.x, Pointer.position.y, 100, 100);
    }

    update(){
        for (const component of this.components){
            component.update();
        }
        for (const child of this.children){
            child.update();
        }
        this.spriteRenderer.update();
        this.transform.update(Pointer.position.x, Pointer.position.y);
    }

    render(){
        this.spriteRenderer.render(this.transform.position.x, this.transform.position.y);
    }
}
export default GameObject;