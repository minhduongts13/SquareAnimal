// SceneManager.ts
import Scene from "./Scene";
import Camera from "./Camera";
import MenuScene from "../../game/Menu/MenuScene";
import GameOverScene from "../../game/GameOver/GameOverScene";
import GamePlayScene from "../../game/GamePlay/GamePlayScene";
import PhysicsHandler from "./PhysicsHandler";
class SceneManager implements Engine.ISceneManager {
    private static scenes : Map<string, Scene>;
    private static currentScene : string;

    static init(){
        SceneManager.scenes = new Map<string, Scene>();
        SceneManager.scenes.set("menu", new MenuScene());
        SceneManager.scenes.set("gameplay", new GamePlayScene());
        SceneManager.scenes.set("gameover", new GameOverScene());
        
        SceneManager.currentScene = "menu";
        
    }

    static switchScene = (nextScene : string): void => {
        if (SceneManager.currentScene){
            SceneManager.scenes.get(SceneManager.currentScene)!.end();
        }
        SceneManager.currentScene = nextScene;
        SceneManager.scenes.get(SceneManager.currentScene)!.setup();
        SceneManager.scenes.get(SceneManager.currentScene)!.run();

    }

    static async preload(): Promise<void> {
        for (let scene of this.scenes){
            await scene[1].preload();
        }
    }
    
    static update = (): void => {
        if (SceneManager.currentScene) {
            SceneManager.scenes.get(SceneManager.currentScene)!.run();
        }
    }
}
export default SceneManager;