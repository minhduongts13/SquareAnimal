// SpriteRenderer.ts
import Renderer from "./Renderer";
import { Settings } from "./Settings";
import ResourceManager from "./ResourceManager";
import Component from "./Component";
import Animator from "./Animator";
class SpriteRenderer extends Component {
    private animators: Animator[];


    constructor(path: string, frameWidth: number, frameHeight: number, frameCount: number) {
        super();
        this.animators = [];
        this.animators.push(new Animator(path, frameWidth, frameHeight, frameCount));
    }

    update() {
        this.animators[0].update();
    }

    render(x: number, y: number) {
        this.animators[0].render(x, y);
    }
    
}
export default SpriteRenderer;