// LoadingScene.ts
import ResourceManager from "../../core/manager/ResourceManager";
import Scene from "../../core/manager/Scene";
import SceneManager from "../../core/manager/SceneManager";
import { IMAGES } from "../constant/images";
import LoadingBackground from "./LoadingBackground";
class LoadingScene extends Scene {
    
    constructor(){
        super();
    }

    public create(): void{
        this.gameObjects.push(new LoadingBackground());
    }

    public async preload(): Promise<void> {
        await ResourceManager.loadImage(IMAGES.LOADING_BG.KEY, IMAGES.LOADING_BG.PATH);
    }

}
export default LoadingScene;