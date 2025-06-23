// CatCharacter.ts
import GameObject from "../../core/gameobject/GameObject";
import Transform from "../../core/component/Transform";
import SpriteRenderer from "../../core/renderer/SpriteRenderer";
import { IMAGES } from "../constant/images";

class CatCharacter extends GameObject {
    constructor(){
        super(new Transform(10, 485, 64, 64));
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.CAT_CHAR_MENU.KEY,
                frameWidth: 64,
                frameHeight: 64,
                frameCount: 10
            }
        );
    }
}
export default CatCharacter;