// Scene.ts
import Renderer from "./Renderer";
import Pointer from "./Pointer";
import GameObject from "./GameObject";
class Scene {
    private gameObjects: GameObject[];

    constructor(){
        this.gameObjects = [];
        this.gameObjects.push(new GameObject());
        console.log(this.gameObjects);
        this.setup();
        window.addEventListener("resize", () => {Renderer.setScreenSize();});
    }

    setup = async () =>{
        Renderer.setScreenSize();
    }

    run(){

        Renderer.drawRect(0, 0, window.innerWidth, window.innerHeight, {fillStyle: "white"});
        for (let gameObject of this.gameObjects){
            gameObject.update();
            gameObject.render();
        }
        // Renderer.drawCirle(Pointer.position.x, Pointer.position.y, 50, 0, Math.PI*2, {fillStyle: "yellow"});
    }
    end(){

    }
}

export default Scene;