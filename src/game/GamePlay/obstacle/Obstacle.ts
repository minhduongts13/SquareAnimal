// Obstacle.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import Transform from "../../../core/component/Transform";
import GameObject from "../../../core/gameobject/GameObject";
import Settings from "../../../core/manager/Settings";
import ImageRenderer from "../../../core/renderer/ImageRenderer";
import { SceneKeys } from "../../constant/SceneKeys";
import ObstaclePoolManager from "./ObstaclePoolManager";

class Obstacle extends GameObject {
    public active : boolean;
    constructor(key : string, width : number, height : number) {
        super(new Transform(SceneKeys.OBSTACLE.INITIAL_POS.x, SceneKeys.OBSTACLE.INITIAL_POS.y, width, height));
        this.active = false;
        this.renderer = new ImageRenderer({
            key: key,
            width: width,
            height: height
        });
    }

    reset() {
        this.transform.update(SceneKeys.OBSTACLE.INITIAL_POS.x, SceneKeys.OBSTACLE.INITIAL_POS.y);
        this.active = false;
    }

    update() {
        if (!this.active) return;
        super.update();
        this.transform.update(this.transform.position.x - Settings.get("gameSpeed")*Settings.get("deltaTime"))
        if (this.transform.position.x < -this.transform.size.width) {
            ObstaclePoolManager.release(this);
        }
    }
}
export default Obstacle;