// ParallaxLayer.ts
import ResourceManager from "../../core/manager/ResourceManager";
import Settings from "../../core/manager/Settings";
import Renderer from "../../core/renderer/Renderer";

class ParallaxLayer {
    private img: HTMLImageElement;
    private x1 = 0;
    private x2: number;
    private speed: number;      
    private height: number;

    constructor(key: string, path: string, speed: number, height: number) {
        this.img    = ResourceManager.getImage(key);
        this.x2     = this.img.width;
        this.speed  = speed;
        this.height = height;
    }

    update() {
        this.x1 -= this.speed * Settings.get("deltaTime");
        this.x2 -= this.speed * Settings.get("deltaTime");
        const w = this.img.width;
        if (this.x1 + w <= 0) this.x1 = this.x2 + w;
        if (this.x2 + w <= 0) this.x2 = this.x1 + w;
    }

    render() {
        Renderer.drawImage(this.img, this.x1, 0, this.img.width, this.height);
        Renderer.drawImage(this.img, this.x2, 0, this.img.width, this.height);
    }
}
export default ParallaxLayer;