// RigidBody.ts
import Settings from "../manager/Settings";
import Transform from "./Transform";
import GameObject from "../gameobject/GameObject";
class RigidBody implements Engine.IComponent{
    private velocity : {x : number, y : number};
    private mass : number;
    private useGravity : boolean;
    private transform : Transform;
    private force : {x : number, y : number};
    private damping : number;

    constructor(transform : Transform, velocity : {x : number, y : number}, mass : number, useGravity : boolean) {
        this.transform = transform;
        this.velocity = velocity;
        this.mass = mass;
        this.useGravity = useGravity;
        this.force = {x : 0, y : 0};
        this.damping = 1;
    }

    addForce(force : {x : number, y : number}){
        this.force.x += force.x;
        this.force.y += force.y;
    }

    update() {
        if (this.useGravity) {
            this.force.y += Settings.get("gravity") * this.mass;
        }

        // a = F / m
        const ax = this.force.x / this.mass;
        const ay = this.force.y / this.mass;

        this.velocity.x += ax * Settings.get("deltaTime");
        this.velocity.y += ay * Settings.get("deltaTime");

        this.velocity.x *= Math.max(0, 1 - this.damping * Settings.get("deltaTime"));
        // this.velocity.y *= Math.max(0, 1 - this.damping * Settings.get("deltaTime"));

        this.transform.update(this.transform.position.x + this.velocity.x * Settings.get("deltaTime"), 
        Math.min(Settings.get("gameHeight") - 224, this.transform.position.y + this.velocity.y * Settings.get("deltaTime")));
        this.force.x = 0;
        this.force.y = 0;
    }

    getVelocity(){
        return this.velocity;
    }

    setVelocity(velocity : {x : number, y : number}){
        this.velocity.x = velocity.x;
        this.velocity.y = velocity.y;
    }

    getUseGravity(){
        return this.useGravity;
    }

    setUseGravity(useGravity : boolean){
        this.useGravity = useGravity;
    }

}
export default RigidBody;