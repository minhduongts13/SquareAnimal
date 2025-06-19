// SceneManager.ts
import Scene from "./Scene";
import Camera from "./Camera";
class SceneManager {
    private static scenes : Map<string, Scene>;
    private static currentScene : Scene;

    static init(){
        SceneManager.scenes = new Map<string, Scene>();
        SceneManager.scenes.set("menu", new Scene());
        SceneManager.currentScene = SceneManager.scenes.get("menu")!;
    }

    static changeScene = (newScene : Scene): void => {
        if (SceneManager.currentScene){
            SceneManager.currentScene.end();
        }
        SceneManager.currentScene = newScene;
        SceneManager.currentScene.setup();
        SceneManager.currentScene.run();
    }

    static update = (): void => {
        if (SceneManager.currentScene) {
            SceneManager.currentScene.run();
        }
    }
}
export default SceneManager;