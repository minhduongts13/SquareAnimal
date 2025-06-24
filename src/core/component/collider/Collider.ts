// Collider.ts
import Transform from "../Transform";
abstract class Collider implements Engine.IComponent {
    public transform : Transform;
    protected tag : string;
    constructor(transform: Transform){
        this.transform = transform;
    }

    checkCollision(collider : Collider) : boolean {
        return false;
    }

    update(){
        
    }

    get getTag(): string {
        return this.tag;
    }
    onCollision?(other: Collider): void;
}
export default Collider;