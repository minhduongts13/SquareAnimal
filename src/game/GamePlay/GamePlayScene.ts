// GamePlayScene.ts
import PhysicsHandler from "../../core/manager/PhysicsHandler";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import Settings from "../../core/manager/Settings";
import { IMAGES } from "../constant/images";
import GamePlayBackground from "./GamePlayBackground";
import Ground from "./Ground";
import ObstaclePoolManager from "./obstacle/ObstaclePoolManager";
import Player from "./player/Player";

class GamePlayScene extends Scene {
    private timer: number = 0;
    private spawnInterval: number;
    private spawnPoint: {x : number, y : number};
    constructor(){
        super();
        this.spawnInterval = 5;
        this.spawnPoint = {x : Settings.get("gameWidth") + 300, y : 0}
    }


    public async preload(): Promise<void> {
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
        await ResourceManager.loadImage(IMAGES.SQUARE.KEY, IMAGES.SQUARE.PATH);
    }

    create(){
        this.timer = 0;
        this.gameObjects.push(new GamePlayBackground());
        this.gameObjects.push(new Ground());
        this.gameObjects.push(new Player());
        ObstaclePoolManager.create();
        ObstaclePoolManager.getAll().forEach(element => {
            this.gameObjects.push(element);
        });
        PhysicsHandler.changeScene(this.gameObjects);
    }

    run(){
        this.timer += Settings.get("deltaTime");
        if (this.timer >= this.spawnInterval) {
            this.timer = 0;
            let index = Math.floor(Math.random() * 4);  
            const obstacle = ObstaclePoolManager.get(index);
            obstacle.getTransform.update(this.spawnPoint.x, this.spawnPoint.y);
        }
        for (let gameObject of this.gameObjects){
            gameObject.update();
            gameObject.render();
        }
        PhysicsHandler.update();
    }

    
}
export default GamePlayScene;