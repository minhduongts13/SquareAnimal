// SoundManager.ts
import ResourceManager from "./ResourceManager"
class SoundManager {
    private static playingAudios: Map<string, HTMLAudioElement>;

    static async init(){
        SoundManager.playingAudios = new Map();
    }
    
    static async play(path : string, volume: number = 1.0){
        const audio = await ResourceManager.getAudio(path);
        audio.src = path;
        audio.loop = false;
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(console.error);
        SoundManager.playingAudios.set(path, audio);
        console.log(audio);
    }

    static async stop(path: string){
        const audio = SoundManager.playingAudios.get(path);
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    }

    static async stopAll(){

    }

    static async playOnLoop(path: string, volume: number = 1.0){
        const audio = await ResourceManager.getAudio(path);
        audio.loop = true;
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(console.error);
        SoundManager.playingAudios.set(path, audio);

    }
}
export default SoundManager;