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
import SquarePoolManager from "../../game/GamePlay/player/SquarePoolManager";
class PhysicsHandler {
    private gameObjects : GameObject[];

    init(){
        this.gameObjects = [];
    }

    private collectCollider(gameObjects : GameObject[]){
        let colliders: { go: GameObject; col: Collider }[] = [];
        for (const go of gameObjects) {
            for (let comp of go.getAllComponents()){
                if (comp instanceof Collider) colliders.push({ go, col : comp });
            }
            
            const children = go.getChildren as GameObject[]; 
            if (children.length > 0) {
                colliders.push(...this.collectCollider(children));
            }

        }
        return colliders;
    }

    update(gameObjects : GameObject[]){
        this.gameObjects = gameObjects;

        for (const go of this.gameObjects) {
            let rb = go.getComponent(RigidBody);
            if (rb) rb.update();
            go.getChildren.forEach(child => {
                rb = child.getComponent(RigidBody);
                if (rb) rb.update();
            });
        }

        let colliders: { go: GameObject; col: Collider }[] = this.collectCollider(this.gameObjects);
        // colliders = colliders.filter(go => !(go instanceof Obstacle) || (go as Obstacle).active);
        // console.log(colliders);
        for (let i = 0; i < colliders.length; i++) {
            for (let j = i + 1; j < colliders.length; j++) {
                const A = colliders[i];
                const B = colliders[j];
                if (!A.col.checkCollision(B.col)) continue;

                if (A.go instanceof Player && B.go instanceof Square) {
                    this.landOnPlatform(A.go, B.go);
                } else if (B.go instanceof Player && A.go instanceof Square) {
                    this.landOnPlatform(B.go, A.go);
                } else if (A.go instanceof Square && B.go instanceof Square){
                    if (A.col.getTag == SceneKeys.BOX.HEAD || B.col.getTag == SceneKeys.BOX.HEAD) continue;
                    if (A.col.transform.position.x > -10) this.landOnPlatform(B.go, A.go)
                } else if (A.go instanceof Player && B.go instanceof Obstacle){
                    if (A.col.getTag == SceneKeys.PLAYER.HEAD){
                        SceneManager.switchScene("gameover");
                    }
                    else this.landOnObstacle(A.go, B.go);
                } else if (A.go instanceof Obstacle && B.go instanceof Player){
                    if (A.col.getTag == SceneKeys.PLAYER.HEAD){
                        SceneManager.switchScene("gameover");
                    }
                    else this.landOnObstacle(B.go, A.go);
                } else if (A.go instanceof Square && B.go instanceof Obstacle){
                    if (A.col.getTag == SceneKeys.BOX.HEAD) this.stopSquareObstacle(A.go, B.go);
                    else this.goSquareObstacle(A.go, B.go);
                } else if (A.go instanceof Obstacle && B.go instanceof Square){
                    if (B.col.getTag == SceneKeys.BOX.HEAD) this.stopSquareObstacle(B.go, A.go);
                    else this.goSquareObstacle(B.go, A.go);
                }
                
            }
        }
    }

    private landOnObstacle(A: Player, B: Obstacle){
        const rb = A.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }

    private landOnPlatform(p1: GameObject, p2: GameObject) {
        const pTransform = p1.getTransform;
        const platTransform = p2.getTransform;
        const newY = platTransform.position.y - pTransform.size.height;
        pTransform.update(pTransform.position.x, newY);

        const rb = p1.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }

    private stopSquareObstacle(A : Square, B : Obstacle){
        A.getTransform.update(A.getTransform.position.x - 180*Settings.get("deltaTime"));
        let player = undefined;
        for (let go of this.gameObjects){
            if (go instanceof Player){
                player = go;
                console.log(player);
                break;
            }
        }
        if (A.getTransform.position.x < - 32) player?.releaseSquare(A.getId());
    }

    private goSquareObstacle(A : Square, B : Obstacle){
        const rb = A.getComponent(RigidBody)! as RigidBody;
        rb.setVelocity({ x: rb.getVelocity().x, y: 0 });
    }
}
export default PhysicsHandler;