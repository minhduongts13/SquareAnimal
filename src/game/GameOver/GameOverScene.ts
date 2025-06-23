// GameOverScene.ts

import Button from "../../core/gameobject/Button";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import SceneManager from "../../core/manager/SceneManager";
import { IMAGES } from "../constant/images";
import GameOverBackground from "./GameOverBackground";
import GameOverLogo from "./GameOverLogo";


class GameOverScene extends Scene {
    
    constructor(){
        super();
    }

    create(): void {
        this.gameObjects.push(new GameOverBackground());
        this.gameObjects.push(new GameOverLogo())
        this.gameObjects.push(new Button(150, 200, 150, 50, "Restart",
            () => {
                SceneManager.switchScene("menu");
            },
            "#A4DD00",
            "#B6F500"
        ));

        this.gameObjects.push(new Button(150, 270, 150, 50, "Back to Menu",
            () => {
                SceneManager.switchScene("menu");
            },
            "yellow",
            "#FFFA8D"
        ));
    }

    public async preload(): Promise<void> {
        await ResourceManager.loadImage(IMAGES.GAME_OVER_BG.KEY, IMAGES.GAME_OVER_BG.PATH)
        await ResourceManager.loadImage(IMAGES.GAME_OVER_LOGO.KEY, IMAGES.GAME_OVER_LOGO.PATH)
        this.create();
    }

}
export default GameOverScene;