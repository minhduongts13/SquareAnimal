// MenuLogo.ts

import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";

class GameOverLogo extends GameObject {
    constructor(){
        let transform = new Transform(0, 0);
        super(transform);
        this.transform = new Transform(0, 80);
        
        this.renderer = new ImageRenderer(
            {
                key: IMAGES.GAME_OVER_LOGO.KEY,
                width: 460,
                height: 118,
            }
        );
    }

}
export default GameOverLogo;