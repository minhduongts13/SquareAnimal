// LoadingScene.ts
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import { IMAGES } from "../constant/images";
import LoadingBackground from "./LoadingBackground";
import LoadingIcon from "./LoadingIcon";
import LoadingText from "./LoadingText";
class LoadingScene extends Scene {
    
    constructor(){
        super();
    }

    public create(): void{
        this.gameObjects = [];
        this.gameObjects.push(new LoadingBackground());
        this.gameObjects.push(new LoadingIcon());
        this.gameObjects.push(new LoadingText());
    }

    public async preload(): Promise<void> {
        await ResourceManager.loadImage(IMAGES.LOADING_BG.KEY, IMAGES.LOADING_BG.PATH);
        await ResourceManager.loadImage(IMAGES.LOADING_ICON.KEY, IMAGES.LOADING_ICON.PATH);
        await ResourceManager.loadImage(IMAGES.LOADING_TEXT.KEY, IMAGES.LOADING_TEXT.PATH);
        this.create();
    }

}
export default LoadingScene;