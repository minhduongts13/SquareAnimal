// Ground.ts
import BoxCollider from "../../core/component/collider/BoxCollider";
import RigidBody from "../../core/component/RigidBody";
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";

class Ground extends GameObject {
    constructor(){
        super(new Transform(0, Settings.get("gameHeight") - 192, Settings.get("gameWidth"), 192));
        this.renderer = new ImageRenderer({
            key: IMAGES.GAME_GROUND.KEY,
            width: Settings.get("gameWidth"),
            height: 192
        });
        let collider = new BoxCollider(this.transform);
        this.addComponent(collider);
    }

}
export default Ground;