// GamePlayScene.ts
import PhysicsHandler from "../../core/manager/PhysicsHandler";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import Settings from "../../core/manager/Settings";
import SoundManager from "../../core/manager/SoundManager";
import Renderer from "../../core/renderer/Renderer";
import { IMAGES } from "../constant/images";
import { SOUNDS } from "../constant/sounds";
import GamePlayBackground from "./GamePlayBackground";
import Ground from "./Ground";
import ObstaclePoolManager from "./obstacle/ObstaclePoolManager";
import Player from "./player/Player";
import SquarePoolManager from "./player/SquarePoolManager";

class GamePlayScene extends Scene {
    private timer: number = 0;
    private speedtimer: number = 0;
    private spawnInterval: number;
    private spawnPoint: {x : number, y : number};
    private prevOb : number = -1;
    constructor(){
        super();
        this.spawnInterval = 5;
        this.spawnPoint = {x : Settings.get("gameWidth") + 300, y : 0}
        Settings.add("gameSpeed", 180);
    }


    public async preload(): Promise<void> {
        if (this.loaded) return;
        await ResourceManager.loadImage(IMAGES.CAT_CHAR.KEY, IMAGES.CAT_CHAR.PATH);
        await ResourceManager.loadImage(IMAGES.MENU_BG.KEY, IMAGES.MENU_BG.PATH);
        await ResourceManager.loadImage(IMAGES.MENU_LOGO.KEY, IMAGES.MENU_LOGO.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_MOON.KEY, IMAGES.GAME_BG_MOON.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_CLOUD.KEY, IMAGES.GAME_BG_CLOUD.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_MOUNTAIN.KEY, IMAGES.GAME_BG_MOUNTAIN.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_MOUNTAINBACK.KEY, IMAGES.GAME_BG_MOUNTAINBACK.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_MOUNTAINBACK2.KEY, IMAGES.GAME_BG_MOUNTAINBACK2.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_RIVER.KEY, IMAGES.GAME_BG_RIVER.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_RIVERFRONT.KEY, IMAGES.GAME_BG_RIVERFRONT.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_SKY.KEY, IMAGES.GAME_BG_SKY.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_RIVERSKYREDLEX.KEY, IMAGES.GAME_BG_RIVERSKYREDLEX.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_BG_VILLAGE.KEY, IMAGES.GAME_BG_VILLAGE.PATH);
        await ResourceManager.loadImage(IMAGES.GAME_GROUND.KEY, IMAGES.GAME_GROUND.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_1.KEY, IMAGES.OBSTACLE_1.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_2.KEY, IMAGES.OBSTACLE_2.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_3.KEY, IMAGES.OBSTACLE_3.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_4.KEY, IMAGES.OBSTACLE_4.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_5.KEY, IMAGES.OBSTACLE_5.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_6.KEY, IMAGES.OBSTACLE_6.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_7.KEY, IMAGES.OBSTACLE_7.PATH);
        await ResourceManager.loadImage(IMAGES.OBSTACLE_8.KEY, IMAGES.OBSTACLE_8.PATH);
        await ResourceManager.loadImage(IMAGES.SQUARE.KEY, IMAGES.SQUARE.PATH);
        await ResourceManager.loadAudio(SOUNDS.GAMEPLAY.MUSIC.KEY, SOUNDS.GAMEPLAY.MUSIC.PATH);
        await ResourceManager.loadAudio(SOUNDS.GAMEPLAY.BOX.KEY, SOUNDS.GAMEPLAY.BOX.PATH);

        this.loaded = true;
        this.create();
    }

    create(){
        this.timer = 0;
        this.gameObjects.push(new GamePlayBackground());
        this.gameObjects.push(new Ground());
        this.gameObjects.push(new Player());
        SquarePoolManager.create();
        ObstaclePoolManager.create();
        ObstaclePoolManager.getAll().forEach(element => {
            this.gameObjects.push(element);
        });
    }

    run(){
        this.timer += Settings.get("deltaTime");
        this.speedtimer += Settings.get("deltaTime");
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            let index = Math.floor(Math.random() * 8);  
            if (this.prevOb == index) index = (index + 1)%8;
            this.prevOb = index;
            const obstacle = ObstaclePoolManager.get(index);
            obstacle.getTransform.update(this.spawnPoint.x, this.spawnPoint.y);
        }
        if (this.speedtimer >= 14){
            Settings.add("gameSpeed", Settings.get("gameSpeed") + 40);
            this.spawnInterval = Math.max(1, this.spawnInterval - 0.5)
            this.speedtimer = 0;
        }

        for (let gameObject of this.gameObjects){
            gameObject.update();
            gameObject.render();
        }
        this.physicsHandler.update(this.gameObjects);

        Renderer.drawText(`Score: ${Settings.get("score")}`, 60, 25, {fillStyle: "rgb(117, 80, 0)", font: "25px Arial"});
    }

    reset(): void {
        super.reset();
        this.timer = 0;
        this.spawnInterval = 5;
        Settings.add("gameSpeed", 180);
        Settings.add("score", 0);
        this.prevOb = -1;
        SoundManager.playOnLoop(SOUNDS.GAMEPLAY.MUSIC.KEY);
    }

}
export default GamePlayScene;