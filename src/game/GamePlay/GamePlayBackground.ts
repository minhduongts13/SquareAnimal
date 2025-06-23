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
            new ParallaxLayer(IMAGES.GAME_BG_SKY.KEY, IMAGES.GAME_BG_SKY.PATH, 0, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOON.KEY, IMAGES.GAME_BG_MOON.PATH, 20, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_CLOUD.KEY, IMAGES.GAME_BG_CLOUD.PATH, 30, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAINBACK.KEY, IMAGES.GAME_BG_MOUNTAINBACK.PATH, 40, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAINBACK2.KEY, IMAGES.GAME_BG_MOUNTAINBACK2.PATH, 60, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_MOUNTAIN.KEY, IMAGES.GAME_BG_MOUNTAIN.PATH, 80, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVER.KEY, IMAGES.GAME_BG_RIVER.PATH, 100, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVERFRONT.KEY, IMAGES.GAME_BG_RIVERFRONT.PATH, 120, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_RIVERSKYREDLEX.KEY, IMAGES.GAME_BG_RIVERSKYREDLEX.PATH, 30, Settings.get("gameHeight")),
            new ParallaxLayer(IMAGES.GAME_BG_VILLAGE.KEY, IMAGES.GAME_BG_VILLAGE.PATH, 140, Settings.get("gameHeight")),
            // new ParallaxLayer(IMAGES.GAME_GROUND.KEY, IMAGES.GAME_GROUND.PATH, 140, Settings.get("gameHeight")),
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