// LoadingBackground.ts

import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";


class LoadingBackground extends GameObject {
    constructor(){
        let transform = new Transform(0, 0);
        super(transform);

        this.renderer = new ImageRenderer(
            {
                key: IMAGES.LOADING_BG.KEY,
                width: Settings.get("gameWidth"),
                height: Settings.get("gameHeight"),
            }
        );

    }
    
    

}
export default LoadingBackground;