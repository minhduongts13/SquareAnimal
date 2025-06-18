// GameLoop.ts

import { Settings } from "./Settings";
import SceneManager from "./SceneManager";
import Pointer from "./Pointer";
import Renderer from "./Renderer";
import ResourceManager from "./ResourceManager";
class GameLoop {
    private lastTime : number;
    
    constructor(){
        ResourceManager.init();
        Renderer.init();
        SceneManager.init();
        this.lastTime = Date.now();
        Pointer.init();
        Settings.add("FPS", 60);
    }

    run = () =>{
        let current = Date.now();
        Settings.add("deltaTime", (current - this.lastTime) / 1000);
        this.lastTime = current;

        SceneManager.update();

        requestAnimationFrame(this.run);
    }
}

new GameLoop().run();