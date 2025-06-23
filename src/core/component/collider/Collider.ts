// Collider.ts
import Transform from "../Transform";
abstract class Collider implements Engine.IComponent {
    public transform : Transform;
    constructor(transform: Transform){
        this.transform = transform;
    }

    checkCollision(collider : Collider) : boolean {
        return false;
    }

    update(){
        
    }

    onCollision?(other: Collider): void;
}
export default Collider;