// LoadingIcon.ts
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import SpriteRenderer from "../../core/renderer/SpriteRenderer";
import { IMAGES } from "../constant/images";


class LoadingIcon extends GameObject {
    constructor(){
        let transform = new Transform(Settings.get("gameWidth")/2 - 30, Settings.get("gameHeight")/2 - 100);
        super(transform);
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.LOADING_ICON.KEY,
                frameWidth: 64,
                frameHeight: 64,
                frameCount: 12
            }
        );
    }
}
export default LoadingIcon;