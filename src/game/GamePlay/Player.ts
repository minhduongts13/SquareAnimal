// Player.ts
import BoxCollider from "../../core/component/collider/BoxCollider";
import RigidBody from "../../core/component/RigidBody";
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import ResourceManager from "../../core/manager/ResourceManager";
import SpriteRenderer from "../../core/renderer/SpriteRenderer";
import { IMAGES } from "../constant/images";

class Player extends GameObject {
    constructor(){
        super(new Transform(32, 400, 32, 32));
        
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.CAT_CHAR.KEY,
                frameWidth: 32,
                frameHeight: 32,
                frameCount: 10
            }
        );
        let collider = new BoxCollider(this.transform);
        let rigidBody = new RigidBody(this.transform, {x : 0, y : 0}, 100, true);
        this.addComponent(collider);
        this.addComponent(rigidBody);
    }
}
export default Player;