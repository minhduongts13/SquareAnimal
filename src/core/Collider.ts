// Collider.ts
import Component from "./Component";
class Collider extends Component {
    constructor(){
        super();
        this.name = "Collider";
    }

    checkCollision(collider : Collider) : boolean {
        return false;
    }

    update(){
        
    }
}
export default Collider;