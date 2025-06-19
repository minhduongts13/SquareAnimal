// GameLoop.ts

import { Settings } from "./Settings";
import SceneManager from "./SceneManager";
import Pointer from "./Pointer";
import Renderer from "./Renderer";
import ResourceManager from "./ResourceManager";
import InputHandler from "./InputHandler";
import SoundManager from "./SoundManager";
class GameLoop {
    private lastTime : number;
    
    constructor(){
        this.setup();
    }

    setup = async () => {
        Settings.add("imgsrc", "../../assets/images/");
        Settings.add("soundsrc", "../../assets/sounds/");
        Settings.add("FPS", 8);
        Settings.add("gravity", 9.8);
        await ResourceManager.init();
        Renderer.init();
        InputHandler.init(Renderer.getCanvas());
        SceneManager.init();
        this.lastTime = Date.now();
        Pointer.init();
        await SoundManager.init();
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