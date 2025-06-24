// Scene.ts
import Renderer from "../renderer/Renderer";
import GameObject from "../gameobject/GameObject";
import PhysicsHandler from "./PhysicsHandler";
class Scene {
    protected gameObjects: GameObject[];

    constructor(){
        this.gameObjects = [];
        this.setup();
        window.addEventListener("resize", () => {Renderer.setScreenSize();});
    }
    
    setup = async () =>{
        PhysicsHandler.init();
        PhysicsHandler.changeScene(this.gameObjects);
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

    reset() {
        this.gameObjects = [];
        PhysicsHandler.init();
        
        this.create();
        PhysicsHandler.changeScene(this.gameObjects);
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