// SceneManager.ts
import Scene from "./Scene";
import MenuScene from "../../game/Menu/MenuScene";
import GameOverScene from "../../game/GameOver/GameOverScene";
import GamePlayScene from "../../game/GamePlay/GamePlayScene";
import LoadingScene from "../../game/Loading/LoadingScene";
class SceneManager implements Engine.ISceneManager {
    private static scenes : Map<string, Scene>;
    private static currentScene : string;

    static async init(){
        SceneManager.scenes = new Map<string, Scene>();
        SceneManager.scenes.set("loading", new LoadingScene());
        SceneManager.scenes.set("menu", new MenuScene());
        SceneManager.scenes.set("gameplay", new GamePlayScene());
        SceneManager.scenes.set("gameover", new GameOverScene());
        SceneManager.currentScene = "loading";
        await SceneManager.scenes.get("loading")!.preload();
    }

    static switchScene = (nextScene : string): void => {
        SceneManager.scenes.get(SceneManager.currentScene)!.end();
        
        SceneManager.currentScene = "loading";
        const targetScene = SceneManager.scenes.get(nextScene)!;
        targetScene.preload().then(() => {
            targetScene.reset();
            SceneManager.currentScene = nextScene;
        })
    }
    
    static update = (): void => {
        SceneManager.scenes.get(this.currentScene)!.run();
    }
    
}
export default SceneManager;