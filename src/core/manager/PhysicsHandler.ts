// PhysicsHandler.ts
import Collider from "../component/collider/Collider";
import GameObject from "../gameobject/GameObject";
import RigidBody from "../component/RigidBody";
import Player from "../../game/GamePlay/player/Player";
import Obstacle from "../../game/GamePlay/obstacle/Obstacle";
import Ground from "../../game/GamePlay/Ground";
import Square from "../../game/GamePlay/player/Square";
import SceneManager from "./SceneManager";
class PhysicsHandler {
    private static gameObjects : GameObject[];

    static init(){
        PhysicsHandler.gameObjects = [];
    }

    static changeScene(gameObjects : GameObject[]){
        PhysicsHandler.gameObjects = gameObjects;
    }

    static register(gameObject : GameObject){
        PhysicsHandler.gameObjects.push(gameObject);
    }

    static update(){
        for (const go of PhysicsHandler.gameObjects) {
            let rb = go.getComponent(RigidBody);
            if (rb) rb.update();
            go.getChildren.forEach(child => {
                rb = child.getComponent(RigidBody);
                if (rb) rb.update();
            });
        }

        const colliders: { go: GameObject; col: Collider }[] = [];
        for (const go of PhysicsHandler.gameObjects) {
            for (let comp of go.getAllComponents()){
                if (comp instanceof Collider) colliders.push({ go, col : comp });
            }
            
            go.getChildren.forEach(child => {
                const c = child.getComponent(Collider) as Collider;
                if (c) colliders.push({ go: child as GameObject, col: c });  
            });
        }
        console.log(colliders);
        for (let i = 0; i < colliders.length; i++) {
            for (let j = i + 1; j < colliders.length; j++) {
                const A = colliders[i];
                const B = colliders[j];
                if (!A.col.checkCollision(B.col)) continue;

                if (A.go instanceof Player && B.go instanceof Square) {
                    console.log("Collide");
                    PhysicsHandler.landOnPlatform(A.go, B.go);
                } else if (B.go instanceof Player && A.go instanceof Square) {
                    console.log("Collide");
                    PhysicsHandler.landOnPlatform(B.go, A.go);
                } else if (A.go instanceof Square && B.go instanceof Square){
                    PhysicsHandler.landOnPlatform(B.go, A.go)
                } else if (A.go instanceof Player && B.go instanceof Obstacle && A.col.getTag == "HEAD"){
                    console.log("over")
                    SceneManager.switchScene("gameover");
                } else if (A.go instanceof Obstacle && B.go instanceof Player && A.col.getTag == "HEAD"){
                    SceneManager.switchScene("gameover");
                } 
                
            }
        }
    }

    private static landOnPlatform(p1: GameObject, p2: GameObject) {
        
        const pTransform = p1.getTransform;
        const platTransform = p2.getTransform;
        const newY = platTransform.position.y - pTransform.size.height;
        pTransform.update(pTransform.position.x, newY);

        const rb = p1.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
        rb.setUseGravity(false);
    }


}
export default PhysicsHandler;