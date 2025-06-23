// ResourceManager.ts
import Settings from "./Settings";
class ResourceManager {
    private static image : Map<string, HTMLImageElement>;
    private static audio : Map<string, HTMLAudioElement>;

    static init = async () => {
        this.image = new Map<string, HTMLImageElement>();
        this.audio = new Map<string, HTMLAudioElement>();
        try {
            await this.loadImage("phaser-logo", Settings.get("imgsrc") + "phaser-logo.png");
            await this.loadImage("Attack_KG", Settings.get("imgsrc") + "Attack_KG_3.png");
            await this.loadImage("PisoA", Settings.get("imgsrc") + "PisoA_strip18.png");
        } catch (e) {
            console.error("Could not load image:", e);
        }
    }

    static loadImage(key : string, path: string): Promise<HTMLImageElement>{
        if (this.image.has(key)){
            return Promise.resolve(this.image.get(key)!);
        }
        else return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                this.image.set(key, img);
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error(`Failed to load image at ${path}`));
            };
        });
    }

    static loadAudio(key : string, path: string): Promise<HTMLAudioElement>{
        if (this.audio.has(key)){
            return Promise.resolve(this.audio.get(key)!);
        }
        else return new Promise((resolve, reject) => {
            const audio = new Audio(path);
            audio.onloadeddata = () => {
                this.audio.set(key, audio);
                resolve(audio);
            };
            audio.onerror = () => {
                reject(new Error(`Failed to load audio at ${path}`));
            };
        });
    }

    static getImage(key: string): HTMLImageElement {
        return this.image.get(key)!;
    }

    static getAudio(key: string): HTMLAudioElement {
        return this.audio.get(key)!;
    }

    static clear(){
        this.image.clear();
        this.audio.clear();
    }
}
export default ResourceManager;