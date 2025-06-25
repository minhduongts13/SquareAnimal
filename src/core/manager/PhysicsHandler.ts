// PhysicsHandler.ts
import Collider from "../component/collider/Collider";
import GameObject from "../gameobject/GameObject";
import RigidBody from "../component/RigidBody";
import Player from "../../game/GamePlay/player/Player";
import Obstacle from "../../game/GamePlay/obstacle/Obstacle";
import Ground from "../../game/GamePlay/Ground";
import Square from "../../game/GamePlay/player/Square";
import SceneManager from "./SceneManager";
import Settings from "./Settings";
import { SceneKeys } from "../../game/constant/SceneKeys";
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

    private static collectCollider(gameObjects : GameObject[]){
        let colliders: { go: GameObject; col: Collider }[] = [];
        for (const go of gameObjects) {
            for (let comp of go.getAllComponents()){
                if (comp instanceof Collider) colliders.push({ go, col : comp });
            }
            
            const children = go.getChildren as GameObject[]; 
            if (children.length > 0) {
                colliders.push(...PhysicsHandler.collectCollider(children));
            }

        }
        return colliders;
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

        const colliders: { go: GameObject; col: Collider }[] = PhysicsHandler.collectCollider(PhysicsHandler.gameObjects);
        // for (const go of PhysicsHandler.gameObjects) {
        //     for (let comp of go.getAllComponents()){
        //         if (comp instanceof Collider) colliders.push({ go, col : comp });
        //     }
            
        //     go.getChildren.forEach(child => {
        //         const c = child.getComponent(Collider) as Collider;
        //         if (c) colliders.push({ go: child as GameObject, col: c });  
        //     });
        // }
        // console.log(colliders);
        for (let i = 0; i < colliders.length; i++) {
            for (let j = i + 1; j < colliders.length; j++) {
                const A = colliders[i];
                const B = colliders[j];
                if (!A.col.checkCollision(B.col)) continue;

                if (A.go instanceof Player && B.go instanceof Square) {
                    PhysicsHandler.landOnPlatform(A.go, B.go);
                } else if (B.go instanceof Player && A.go instanceof Square) {
                    PhysicsHandler.landOnPlatform(B.go, A.go);
                } else if (A.go instanceof Square && B.go instanceof Square){
                    if (A.col.getTag == SceneKeys.BOX.HEAD || B.col.getTag == SceneKeys.BOX.HEAD) continue;
                    if (A.col.transform.position.x > -10) PhysicsHandler.landOnPlatform(B.go, A.go)
                } else if (A.go instanceof Player && B.go instanceof Obstacle){
                    if (A.col.getTag == SceneKeys.PLAYER.HEAD){
                        SceneManager.switchScene("gameover");
                    }
                    else PhysicsHandler.landOnObstacle(A.go, B.go);
                } else if (A.go instanceof Obstacle && B.go instanceof Player){
                    if (A.col.getTag == SceneKeys.PLAYER.HEAD){
                        SceneManager.switchScene("gameover");
                    }
                    else PhysicsHandler.landOnObstacle(B.go, A.go);
                } else if (A.go instanceof Square && B.go instanceof Obstacle){
                    console.log("Collide");
                    if (A.col.getTag == SceneKeys.BOX.HEAD) PhysicsHandler.stopSquareObstacle(A.go, B.go);
                    else PhysicsHandler.goSquareObstacle(A.go, B.go);
                } else if (A.go instanceof Obstacle && B.go instanceof Square){
                    console.log("Collide");
                    if (B.col.getTag == SceneKeys.BOX.HEAD) PhysicsHandler.stopSquareObstacle(B.go, A.go);
                    else PhysicsHandler.goSquareObstacle(B.go, A.go);
                }
                
            }
        }
    }

    private static landOnObstacle(A: Player, B: Obstacle){
        const rb = A.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }

    private static landOnPlatform(p1: GameObject, p2: GameObject) {
        const pTransform = p1.getTransform;
        const platTransform = p2.getTransform;
        const newY = platTransform.position.y - pTransform.size.height;
        pTransform.update(pTransform.position.x, newY);

        const rb = p1.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }

    private static stopSquareObstacle(A : Square, B : Obstacle){
        A.getTransform.update(A.getTransform.position.x - 180*Settings.get("deltaTime"))
    }

    private static goSquareObstacle(A : Square, B : Obstacle){
        const rb = A.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }
}
export default PhysicsHandler;