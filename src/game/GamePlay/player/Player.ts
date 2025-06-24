// Player.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import Controller from "../../../core/component/Controller";
import RigidBody from "../../../core/component/RigidBody";
import Transform from "../../../core/component/Transform";
import GameObject from "../../../core/gameobject/GameObject";
import SpriteRenderer from "../../../core/renderer/SpriteRenderer";
import { IMAGES } from "../../constant/images";
import { SceneKeys } from "../../constant/SceneKeys";
import Square from "./Square";

class Player extends GameObject {
    constructor(){
        super(new Transform(32, 100, 32, 32));
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.CAT_CHAR.KEY,
                frameWidth: 32,
                frameHeight: 32,
                frameCount: 6
            }
        );
        let controller = new Controller(this);
        let collider = new BoxCollider(this.transform, SceneKeys.PLAYER.TAG);
        let collider2 = new BoxCollider(this.transform, SceneKeys.PLAYER.HEAD, 32, 2, 1, 28);
        let rigidBody = new RigidBody(this.transform, {x : 0, y : 0}, 100, true);
        this.addComponent(collider);
        this.addComponent(collider2);
        this.addComponent(rigidBody);
        this.addComponent(controller);
    }

    public placePlatform(): void {
        const x = this.transform.position.x;
        const y = this.transform.position.y + this.transform.size.height;
        this.children.push(new Square(x, y));
    }
}
export default Player;