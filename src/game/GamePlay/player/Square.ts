// Square.ts
import GameObject from "../../../core/gameobject/GameObject";
import Transform  from "../../../core/component/Transform";
import BoxCollider from "../../../core/component/collider/BoxCollider";
import ImageRenderer from "../../../core/renderer/ImageRenderer";
import { IMAGES } from "../../constant/images";
import RigidBody from "../../../core/component/RigidBody";
import { SceneKeys } from "../../constant/SceneKeys";

class Square extends GameObject {
    constructor(x: number, y: number) {
        super(new Transform(x, y, 32, 32));
        this.renderer = new ImageRenderer({
            key: IMAGES.SQUARE.KEY, 
            width: 32,
            height: 32,
        });
        this.addComponent(new BoxCollider(this.transform, SceneKeys.BOX.TAG));
        let rigidBody = new RigidBody(this.transform, {x : 0, y : 0}, 100, true);
        this.addComponent(rigidBody);
    }
}
export default Square;