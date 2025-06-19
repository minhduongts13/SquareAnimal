// PhysicsHandler.ts
import Collider from "./Collider";
import GameObject from "./GameObject";
import RigidBody from "./RigidBody";
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
            const rb = go.getComponent(RigidBody);
            if (rb) rb.update();
        }

        const colliders: { go: GameObject; col: Collider }[] = [];
        for (const go of PhysicsHandler.gameObjects) {
            const col = go.getComponent(Collider) as Collider;
            if (col) colliders.push({ go, col });
        }

        for (let i = 0; i < colliders.length; i++) {
            for (let j = i + 1; j < colliders.length; j++) {
                const A = colliders[i];
                const B = colliders[j];
                if (A.col.checkCollision(B.col)) {
                    console.log("Collide");
                    const rbA = PhysicsHandler.gameObjects[i].getComponent(RigidBody) as RigidBody;
                    const rbB = PhysicsHandler.gameObjects[j].getComponent(RigidBody) as RigidBody;
                    if (rbA){
                        rbA.setVelocity({x : rbA.getVelocity().x, y : 0})
                        rbA.setUseGravity(false);
                    }
                    // if (rbB){
                    //     rbB.addForce({x : 1, y : 0});
                    // }
                }
            }
        }
    }
}
export default PhysicsHandler;