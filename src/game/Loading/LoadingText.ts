// LoadingText.ts
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import { IMAGES } from "../constant/images";

class LoadingText extends GameObject {
    constructor(){
        let transform = new Transform(20, 100);
        super(transform);
        this.renderer = new ImageRenderer(
            {
                key: IMAGES.LOADING_TEXT.KEY,
                width: 429,
                height: 120,
            }
        );
    }
}
export default LoadingText;