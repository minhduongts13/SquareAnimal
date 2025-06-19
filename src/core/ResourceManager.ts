// ResourceManager.ts
import { Settings } from "./Settings";
class ResourceManager {
    private static image : Map<string, HTMLImageElement>;
    private static audio : Map<string, HTMLAudioElement>;

    static init = async () => {
        this.image = new Map<string, HTMLImageElement>();
        this.audio = new Map<string, HTMLAudioElement>();
        try {
            await this.loadImage(Settings.get("imgsrc") + "phaser-logo.png");
            await this.loadImage(Settings.get("imgsrc") + "Attack_KG_3.png");
            await this.loadImage(Settings.get("imgsrc") + "PisoA_strip18.png");
        } catch (e) {
            console.error("Could not load image:", e);
        }
    }

    static loadImage(path: string): Promise<HTMLImageElement>{
        if (this.image.has(path)){
            return Promise.resolve(this.image.get(path)!);
        }
        else return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                this.image.set(path, img);
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error(`Failed to load image at ${path}`));
            };
        });
    }
    static loadAudio(path: string): Promise<HTMLAudioElement>{
        if (this.audio.has(path)){
            return Promise.resolve(this.audio.get(path)!);
        }
        else return new Promise((resolve, reject) => {
            const audio = new Audio(path);
            audio.onloadeddata = () => {
                this.audio.set(path, audio);
                resolve(audio);
            };
            audio.onerror = () => {
                reject(new Error(`Failed to load audio at ${path}`));
            };
        });
    }

    static getImage(path: string): HTMLImageElement {
        return this.image.get(path)!;
    }

    static getAudio(path: string): HTMLAudioElement {
        return this.audio.get(path)!;
    }

    static clear(){
        this.image.clear();
        this.audio.clear();
    }
}
export default ResourceManager;