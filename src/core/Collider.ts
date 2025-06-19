// Collider.ts
import Component from "./Component";
import Transform from "./Transform";
abstract class Collider extends Component {
    public transform : Transform;
    constructor(transform: Transform){
        super();
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