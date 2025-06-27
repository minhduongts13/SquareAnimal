// GameOverScene.ts

import Button from "../../core/gameobject/Button";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import SceneManager from "../../core/manager/SceneManager";
import Settings from "../../core/manager/Settings";
import SoundManager from "../../core/manager/SoundManager";
import Renderer from "../../core/renderer/Renderer";
import { IMAGES } from "../constant/images";
import { SceneKeys } from "../constant/SceneKeys";
import { SOUNDS } from "../constant/sounds";
import GameOverBackground from "./GameOverBackground";
import GameOverLogo from "./GameOverLogo";


class GameOverScene extends Scene {
    constructor(){
        super();
    }

    create(): void {
        this.gameObjects.push(new GameOverBackground());
        this.gameObjects.push(new GameOverLogo())
        this.gameObjects.push(new Button(150, 250, 150, 50, "Restart",
            async () => {
                SceneManager.switchScene("gameplay");
            },
            "#A4DD00",
            "#B6F500"
        ));

        this.gameObjects.push(new Button(150, 320, 150, 50, "Back to Menu",
            async () => {
                await SceneManager.switchScene("menu");
            },
            "yellow",
            "#FFFA8D"
        ));
    }

    public async preload(): Promise<void> {
        if (this.loaded) return;
        await ResourceManager.loadImage(IMAGES.GAME_OVER_BG.KEY, IMAGES.GAME_OVER_BG.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_OVER_LOGO.KEY, IMAGES.GAME_OVER_LOGO.PATH);
        await ResourceManager.loadAudio(SOUNDS.GAMEOVER.SOUND.KEY, SOUNDS.GAMEOVER.SOUND.PATH);

        this.create();
        this.loaded = true;
    }

    run(): void {
        super.run();
        Renderer.drawText(`High Score: ${this.getHighScore()}`, 220, 200, {fillStyle: "rgb(141, 108, 0)"})
        Renderer.drawText(`Your Score: ${Settings.get("score")}`, 220, 230, {fillStyle: "rgb(141, 108, 0)"})
    }

    reset(): void {
        super.reset();
        SoundManager.play(SOUNDS.GAMEOVER.SOUND.KEY, 0.5);
        this.setHighScoreIfHigher(Settings.get("score"));
    }

    private getHighScore(): number {
        const v = localStorage.getItem(SceneKeys.HIGHSCORE_KEY);
        return v ? parseInt(v, 10) : 0;
    }

    private setHighScoreIfHigher(score: number): boolean {
        const prev = this.getHighScore();
        if (score > prev) {
            localStorage.setItem(SceneKeys.HIGHSCORE_KEY, score.toString());
            return true;
        }
        return false;
    }

    private clear() {
        localStorage.removeItem(SceneKeys.HIGHSCORE_KEY);
    }
}
export default GameOverScene;