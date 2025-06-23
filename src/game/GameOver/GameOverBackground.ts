// GameOverBackground.ts

import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";


class GameOverBackground extends GameObject {
    constructor(){
        let transform = new Transform(0, 0);
        super(transform);
        this.transform = new Transform(0, 0)

        this.renderer = new ImageRenderer(
            {
                key: IMAGES.GAME_OVER_BG.KEY,
                width: Settings.get("gameWidth"),
                height: Settings.get("gameHeight"),
            }
        );

    }
    
    

}
export default GameOverBackground;