// Animator.ts
import Renderer from "./Renderer";
import ResourceManager from "./ResourceManager";
import { Settings } from "./Settings";
class Animator {
    private sprite: HTMLImageElement;
    private frameWidth: number;
    private frameHeight: number;
    private frameCount: number;
    private currentFrame = 0;
    private elapsed = 0;

    constructor(path: string, frameWidth: number, frameHeight: number, frameCount: number) {
        this.sprite = ResourceManager.getImage(path);
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
    }

    update() {
        this.elapsed += Settings.get("deltaTime");
        const interval = 1 / Settings.get("FPS");
        if (this.elapsed >= interval) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.elapsed -= interval;
        }
    }

    render(x: number, y: number) {
        const sx = this.currentFrame * this.frameWidth;
        const sy = 0;

        Renderer.drawAnimation(
            this.sprite,
            sx, sy,
            this.frameWidth, this.frameHeight,
            x,  y,
            this.frameWidth, this.frameHeight
    );
    }
}
export default Animator;