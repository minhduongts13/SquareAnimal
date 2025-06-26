// Square.ts
import GameObject from "../../../core/gameobject/GameObject";
import Transform  from "../../../core/component/Transform";
import BoxCollider from "../../../core/component/collider/BoxCollider";
import ImageRenderer from "../../../core/renderer/ImageRenderer";
import { IMAGES } from "../../constant/images";
import RigidBody from "../../../core/component/RigidBody";
import { SceneKeys } from "../../constant/SceneKeys";
import SquarePoolManager from "./SquarePoolManager";

class Square extends GameObject {
    private active : boolean;
    private id : number;
    constructor(id : number) {
        super(new Transform(SceneKeys.BOX.INITIAL_POS.x, SceneKeys.BOX.INITIAL_POS.y, 32, 32));
        this.renderer = new ImageRenderer({
            key: IMAGES.SQUARE.KEY, 
            width: 32,
            height: 32,
        });
        let rigidBody = new RigidBody(this.transform, {x : 0, y : 0}, 100, true);
        this.addComponent(rigidBody);
        this.addComponent(new BoxCollider(this.transform, SceneKeys.BOX.TAG));
        let collider2 = new BoxCollider(this.transform, SceneKeys.BOX.HEAD, 32, 2, 1, 28);
        this.addComponent(collider2);
        this.active = false;
        this.id = id;
    }

    public reset(): void {
        this.transform.update(SceneKeys.BOX.INITIAL_POS.x, SceneKeys.BOX.INITIAL_POS.y);
        this.active = false;
    }

    public work(x : number, y : number) : void {
        this.transform.update(x, y);
        this.active = true;
    }

    public getId(): number {
        return this.id;
    }

}
export default Square;