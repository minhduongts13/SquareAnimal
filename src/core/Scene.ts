// Scene.ts
import Renderer from "./Renderer";
import GameObject from "./GameObject";
import SpriteRenderer from "./SpriteRenderer";
import Transform from "./Transform"
import Button from "./UISystem";
import { Settings } from "./Settings";
import SoundManager from "./SoundManager";
import RigidBody from "./RigidBody";
import BoxCollider from "./BoxCollider";
import Controller from "./Controller";
import PhysicsHandler from "./PhysicsHandler";
class Scene {
    private gameObjects: GameObject[];

    constructor(){
        this.gameObjects = [];
        
        this.gameObjects.push(new GameObject(
            new Transform(0, 0, 100, 80, 0),
            new SpriteRenderer(Settings.get("imgsrc") + "Attack_KG_3.png", 100, 64, 9)
        ));
        let rigidBody = new RigidBody(this.gameObjects[0].getTransform, {x : 0, y : 0}, 1, true);
        let collider = new BoxCollider(this.gameObjects[0].getTransform);
        this.gameObjects[0].addComponent(rigidBody);
        this.gameObjects[0].addComponent(collider);
        let controller = new Controller(this.gameObjects[0]);
        this.gameObjects[0].addComponent(controller);
        
        this.gameObjects.push(new GameObject(
            new Transform(0, 450, 250, 50),
            new SpriteRenderer(Settings.get("imgsrc") + "PisoA_strip18.png", 288, 16, 1)
        ));
        collider = new BoxCollider(this.gameObjects[1].getTransform);
        this.gameObjects[1].addComponent(collider);
        
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
}

export default Scene;