import Collider from "./Collider";
import Transform from "./Transform";
import Renderer from "./Renderer";
// BoxCollider.ts
class BoxCollider extends Collider {
    private xmax : number;
    private ymax : number;
    private xmin : number;
    private ymin : number;
    
    constructor(transform: Transform) {
        super(transform);
        this.xmin = transform.position.x;
        this.ymin = transform.position.y;
        this.xmax = transform.position.x + transform.size.width;
        this.ymax = transform.position.y + transform.size.height;
    }

    get getMax(): { xmax: number; ymax: number } {
        return { xmax: this.xmax, ymax: this.ymax };
    }

    get getMin(): { xmin: number; ymin: number } {
        return { xmin: this.xmin, ymin: this.ymin };
    }
    checkCollision(collider: Collider): boolean {
        if (collider instanceof BoxCollider){
            if (this.xmax < collider.getMin.xmin || 
                this.xmin > collider.getMax.xmax ||
                this.ymax < collider.getMin.ymin ||
                this.ymin > collider.getMax.ymax 
            )
                return false;
            else return true;
        }
        else return false;
    }

    update() {
        this.xmin = this.transform.position.x;
        this.ymin = this.transform.position.y;
        this.xmax = this.transform.position.x + this.transform.size.width;
        this.ymax = this.transform.position.y + this.transform.size.height;

        const x = this.xmin;
        const y = this.ymin;
        const w = this.xmax - this.xmin;
        const h = this.ymax - this.ymin;

        // Dùng strokeRect để vẽ viền
        Renderer.getContext().save();
        Renderer.getContext().strokeStyle = "red";
        Renderer.getContext().lineWidth   = 1;
        Renderer.getContext().strokeRect(x, y, w, h);
        Renderer.getContext().restore();
    }
}
export default BoxCollider;