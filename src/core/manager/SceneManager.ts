// SceneManager.ts
import Scene from "./Scene";
import Camera from "./Camera";
import MenuScene from "../../game/Menu/MenuScene";
import GameOverScene from "../../game/GameOver/GameOverScene";
import GamePlayScene from "../../game/GamePlay/GamePlayScene";
import PhysicsHandler from "./PhysicsHandler";
import LoadingScene from "../../game/Loading/LoadingScene";
class SceneManager implements Engine.ISceneManager {
    private static scenes : Map<string, Scene>;
    private static currentScene : string;

    static init(){
        SceneManager.scenes = new Map<string, Scene>();
        SceneManager.scenes.set("loading", new LoadingScene());
        SceneManager.scenes.set("menu", new MenuScene());
        SceneManager.scenes.set("gameplay", new GamePlayScene());
        SceneManager.scenes.set("gameover", new GameOverScene());
        
        SceneManager.currentScene = "loading";
    }

    static switchScene = (nextScene : string): void => {
        if (SceneManager.currentScene){
            SceneManager.scenes.get(SceneManager.currentScene)!.end();
        }
        SceneManager.currentScene = nextScene;
        SceneManager.scenes.get(SceneManager.currentScene)!.reset();

    }

    static async preload(): Promise<void> {
        for (let scene of this.scenes){
            await scene[1].preload();
        }
        SceneManager.scenes.get(SceneManager.currentScene)!.reset();
    }
    
    static update = (): void => {
        SceneManager.scenes.get(SceneManager.currentScene)!.run();
    }
}
export default SceneManager;