// Camera.ts
import Renderer from "../renderer/Renderer";
import Transform from "../component/Transform";
class Camera {
    public position = { x: 0, y: 0 };
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width  = width;
        this.height = height;
    }

    begin() {
        const ctx = Renderer.getContext();
        ctx.save();
        ctx.translate(-this.position.x, -this.position.y);
    }

    
    end() {
        const ctx = Renderer.getContext();
        ctx.restore();
    }

    
    follow(target: Transform) {
        this.position.x = target.position.x - this.width  / 2 + target.size.width  / 2;
        this.position.y = target.position.y - this.height / 2 + target.size.height / 2;
    }
}
export default Camera;