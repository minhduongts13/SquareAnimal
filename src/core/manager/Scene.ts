// Scene.ts
import Renderer from "../renderer/Renderer";
import GameObject from "../gameobject/GameObject";
import PhysicsHandler from "./PhysicsHandler";
class Scene {
    protected gameObjects: GameObject[];

    constructor(){
        this.gameObjects = [];
        
        PhysicsHandler.init();
        PhysicsHandler.changeScene(this.gameObjects);

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
        PhysicsHandler.update();
        // Renderer.drawCirle(Pointer.position.x, Pointer.position.y, 50, 0, Math.PI*2, {fillStyle: "yellow"});
    }
    end(){

    }

    async preload(): Promise<void> {

    }

    create(): void {
        
    }


    public addObject(gameobject : GameObject): void {
        this.gameObjects.push(gameobject);
    }
    
    public addObjects(gameobjects : GameObject[]): void {
        for (let go of gameobjects){
            this.addObject(go);
        }
    }
}

export default Scene;