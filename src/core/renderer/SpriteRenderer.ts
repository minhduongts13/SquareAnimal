// SpriteRenderer.ts
import Animator from "./Animator";
class SpriteRenderer implements Engine.IRenderer {
    private animators: Animator[];

    constructor(config : IAnimatorConfig) {
        this.animators = [];
        this.animators.push(new Animator(config));
    }

    update() {
        this.animators[0].update();
    }

    render(x: number, y: number) {
        this.animators[0].render(x, y);
    }
    
}
export default SpriteRenderer;