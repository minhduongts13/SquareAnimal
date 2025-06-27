// GamePlayBackground.ts
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import Renderer from "../../core/renderer/Renderer";
import { IMAGES } from "../constant/images";
import ParallaxLayer from "./ParallaxLayer";

class GamePlayBackground extends GameObject{
    private layers: ParallaxLayer[];

    constructor() {
        let transform = new Transform(0, 0);
        super(transform);
        this.layers = [
            new ParallaxLayer(IMAGES.GAME_BG_SKY.KEY, IMAGES.GAME_BG_SKY.PATH, Math.floor(0*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOON.KEY, IMAGES.GAME_BG_MOON.PATH, Math.floor((1/9)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_CLOUD.KEY, IMAGES.GAME_BG_CLOUD.PATH, Math.floor((30/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAINBACK.KEY, IMAGES.GAME_BG_MOUNTAINBACK.PATH, Math.floor((40/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAINBACK2.KEY, IMAGES.GAME_BG_MOUNTAINBACK2.PATH, Math.floor((60/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAIN.KEY, IMAGES.GAME_BG_MOUNTAIN.PATH, Math.floor((80/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVER.KEY, IMAGES.GAME_BG_RIVER.PATH, Math.floor((100/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVERFRONT.KEY, IMAGES.GAME_BG_RIVERFRONT.PATH, Math.floor((120/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVERSKYREDLEX.KEY, IMAGES.GAME_BG_RIVERSKYREDLEX.PATH, Math.floor((30/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_VILLAGE.KEY, IMAGES.GAME_BG_VILLAGE.PATH, Math.floor((140/180)*Settings.get("gameSpeed")), Settings.get("gameHeight")),
            // new ParallaxLayer(IMAGES.GAME_GROUND.KEY, IMAGES.GAME_GROUND.PATH, 140, 192),
        ];
    }

    update(): void {
        this.layers.forEach((layer, i) =>
            layer.update()
        );
    }

    render(): void {
        Renderer.clear();
        this.layers.forEach((layer, i) =>
            layer.render()
        );
    }
}
export default GamePlayBackground;