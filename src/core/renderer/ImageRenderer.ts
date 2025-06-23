import ResourceManager from "../manager/ResourceManager";
import Renderer from "./Renderer";

// ImageRenderer.ts
class ImageRenderer implements Engine.IRenderer {
    private image : HTMLImageElement;
    private width : number;
    private height : number;

    constructor(config : IImageConfig) {
        this.image = ResourceManager.getImage(config.key);
        this.width = config.width;
        this.height = config.height;
    }

    update(): void {
        
    }

    render(x: number, y: number): void {
        Renderer.drawImage(
            this.image,
            x, y, 
            this.width, this.height
        )
    }
}
export default ImageRenderer;