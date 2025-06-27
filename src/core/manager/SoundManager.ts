// SoundManager.ts
import ResourceManager from "./ResourceManager"
class SoundManager {
    private static playingAudios: Map<string, HTMLAudioElement>;

    static async init(){
        SoundManager.playingAudios = new Map();
    }
    
    static async play(key : string, volume: number = 1.0){
        const audio = ResourceManager.getAudio(key);
        audio.loop = false;
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(console.error);
        SoundManager.playingAudios.set(key, audio);
    }

    static async stop(key: string){
        const audio = SoundManager.playingAudios.get(key);
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    }

    static async stopAll(){
        for (const audio of SoundManager.playingAudios.values()) {
            audio.pause();
            audio.currentTime = 0;
        }
        SoundManager.playingAudios.clear();
    }

    static async playOnLoop(key: string, volume: number = 1.0){
        const audio = ResourceManager.getAudio(key);
        audio.loop = true;
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(console.error);
        SoundManager.playingAudios.set(key, audio);

    }
}
export default SoundManager;