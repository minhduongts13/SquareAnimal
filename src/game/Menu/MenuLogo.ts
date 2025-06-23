// MenuLogo.ts

import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";

class MenuLogo extends GameObject {
    constructor(){
        let transform = new Transform(0, 80);
        super(transform);
        this.renderer = new ImageRenderer(
            {
                key: IMAGES.MENU_LOGO.KEY,
                width: 460,
                height: 88,
            }
        );
    }
    
    

}
export default MenuLogo;