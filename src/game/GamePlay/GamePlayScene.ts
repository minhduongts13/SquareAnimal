// GamePlayScene.ts
import Button from "../../core/gameobject/Button";
import PhysicsHandler from "../../core/manager/PhysicsHandler";
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import { IMAGES } from "../constant/images";
import GamePlayBackground from "./GamePlayBackground";
import Ground from "./Ground";
import Player from "./Player";

class GamePlayScene extends Scene {
    
    constructor(){
        super();
        
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
        this.create();
    }

    create(){
        this.gameObjects.push(new GamePlayBackground());
        this.gameObjects.push(new Ground());
        this.gameObjects.push(new Player());
        PhysicsHandler.changeScene(this.gameObjects);
    }

}
export default GamePlayScene;