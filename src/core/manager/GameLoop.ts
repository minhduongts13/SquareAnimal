// GameLoop.ts
import Settings from "./Settings";
import SceneManager from "./SceneManager";
import Pointer from "./Pointer";
import Renderer from "../renderer/Renderer";
import ResourceManager from "./ResourceManager";
import InputHandler from "./InputHandler";
import SoundManager from "./SoundManager";
class GameLoop {
    private lastTime : number;
    private paused = false;
    
    constructor(){
        this.setup().then(() => {
            this.run();
        });
        window.addEventListener("blur",  () => { this.paused = true; });
        window.addEventListener("focus", () => {
            this.paused = false;
            this.lastTime = Date.now();  
        });
    }

    setup = async () => {
        Settings.add("imgsrc", "../../assets/images/");
        Settings.add("score", 0);
        Settings.add("soundsrc", "../../assets/sounds/");
        Settings.add("FPS", 8);
        Settings.add("gravity", 98);
        Settings.add("gameWidth", 448); // 448
        Settings.add("gameHeight", 640); // 640

        await ResourceManager.init();
        Renderer.init();
        Pointer.init();
        InputHandler.init(Renderer.getCanvas());
        await SceneManager.init();
        this.lastTime = Date.now();
        await SoundManager.init();
        SceneManager.switchScene("menu");
    }

    run = () =>{
        if (!this.paused){
            let current = Date.now();
            Settings.add("deltaTime", (current - this.lastTime) / 1000);
            this.lastTime = current;
            SceneManager.update();
        }
        else {
            // Renderer.drawRect(0, 0, window.innerWidth, window.innerHeight, {fillStyle: "white"});
            const canvas = Renderer.getCanvas();
            Renderer.drawRect(
                0, 0,
                canvas.width, canvas.height,
                { fillStyle: "rgba(0, 0, 0, 0.1)" }
            );
            Renderer.drawText(
                "Paused",
                canvas.width  / 2,
                canvas.height / 2,
                {
                    textAlign: "center",
                    textBaseline: "middle",
                    font: "48px Arial",
                    fillStyle: "white"
                }
            );
        }

        requestAnimationFrame(this.run);
    }
}

new GameLoop();