// LoadingBackground.ts

import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import SpriteRenderer from "../../core/renderer/SpriteRenderer";
import { IMAGES } from "../constant/images";


class LoadingBackground extends GameObject {
    constructor(){
        let transform = new Transform(0, 0);
        super(transform);
        this.transform = new Transform(0, 0)
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.LOADING_BG.KEY,
                frameWidth: Settings.get("gameWidth"),
                frameHeight: Settings.get("gameHeight"),
                frameCount: 12
            }
        );
    }
}
export default LoadingBackground;