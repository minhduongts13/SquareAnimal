// MenuScene.ts

import Button from "../../core/gameobject/Button";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import SceneManager from "../../core/manager/SceneManager";
import SoundManager from "../../core/manager/SoundManager";
import { IMAGES } from "../constant/images";
import { SOUNDS } from "../constant/sounds";
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
        const startMusic = () => {
            SoundManager.play(SOUNDS.MENU.MUSIC.KEY, 0.5);
            window.removeEventListener('click', startMusic);
            window.removeEventListener('touchstart', startMusic);
        };
        window.addEventListener('click',    startMusic, { once: true });
        window.addEventListener('touchstart', startMusic, { once: true });
    }

    public async preload(): Promise<void> {
        if (!this.loaded){
            await ResourceManager.loadImage(IMAGES.CAT_CHAR_MENU.KEY, IMAGES.CAT_CHAR_MENU.PATH);
            await ResourceManager.loadImage(IMAGES.MENU_BG.KEY, IMAGES.MENU_BG.PATH);
            await ResourceManager.loadImage(IMAGES.MENU_LOGO.KEY, IMAGES.MENU_LOGO.PATH);
            await ResourceManager.loadAudio(SOUNDS.MENU.MUSIC.KEY, SOUNDS.MENU.MUSIC.PATH);
            // await this.wait(5000);
        }
        this.loaded = true;
        this.create();
    }

    private wait(ms: number) {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
    }

    
}
export default MenuScene;