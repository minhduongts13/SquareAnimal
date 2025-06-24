// MenuScene.ts

import Button from "../../core/gameobject/Button";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import SceneManager from "../../core/manager/SceneManager";
import { IMAGES } from "../constant/images";
import CatCharacter from "./CatCharacter";
import MenuBackground from "./MenuBackground";
import MenuLogo from "./MenuLogo";

class MenuScene extends Scene {
    
    constructor(){
        super();
    }

    public create(): void{
        this.gameObjects.push(new MenuBackground());
        this.gameObjects.push(new Button(150, 200, 150, 50, "Play",
            () => {
                SceneManager.switchScene("gameplay");
            },
            "yellow",
            "#FFFA8D"
        ));
        this.gameObjects.push(new MenuLogo());
        this.gameObjects.push(new CatCharacter());
    }

    public async preload(): Promise<void> {
        await ResourceManager.loadImage(IMAGES.CAT_CHAR_MENU.KEY, IMAGES.CAT_CHAR_MENU.PATH);
        await ResourceManager.loadImage(IMAGES.MENU_BG.KEY, IMAGES.MENU_BG.PATH);
        await ResourceManager.loadImage(IMAGES.MENU_LOGO.KEY, IMAGES.MENU_LOGO.PATH);
    }

}
export default MenuScene;