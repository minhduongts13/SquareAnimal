// SpriteRenderer.ts
import Renderer from "./Renderer";
import { Settings } from "./Settings";
import ResourceManager from "./ResourceManager";
class SpriteRenderer {
    private image: HTMLImageElement;
    private frameWidth: number;
    private frameHeight: number;
    private frameCount: number;
    private currentFrame = 0;
    private elapsed = 0;


    constructor(path: string, frameWidth: number, frameHeight: number, frameCount: number) {
        this.image = ResourceManager.getImage(path);
        console.log(this.image);
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameCount = frameCount;
    }

    update() {
        this.elapsed += Settings.get("deltaTime");
        const interval = 1000 / Settings.get("FPS");
        if (this.elapsed >= interval) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.elapsed -= interval;
        }
        console.log(this.image);

    }

    render(x: number, y: number) {
        Renderer.drawImage(this.image, x, y, this.frameWidth, this.frameHeight);
    }
}
export default SpriteRenderer;