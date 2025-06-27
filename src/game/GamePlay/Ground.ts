// Ground.ts
import BoxCollider from "../../core/component/collider/BoxCollider";
import RigidBody from "../../core/component/RigidBody";
import Transform from "../../core/component/Transform";
import GameObject from "../../core/gameobject/GameObject";
import ResourceManager from "../../core/manager/ResourceManager";
import Settings from "../../core/manager/Settings";
import ImageRenderer from "../../core/renderer/ImageRenderer";
import Renderer from "../../core/renderer/Renderer";
import { IMAGES } from "../constant/images";

class Ground extends GameObject {
    private x2 : number;
    private x1 : number;    
    private img: HTMLImageElement;


    constructor(){
        super(new Transform(0, Settings.get("gameHeight") - 192, Settings.get("gameWidth"), 192));
        this.img    = ResourceManager.getImage(IMAGES.GAME_GROUND.KEY);

        this.x1 = 0;
        this.x2 = Settings.get("gameWidth");
        this.tag = "ground";
    }

    update() {
        this.x1 -= Settings.get("gameSpeed") * Settings.get("deltaTime");
        this.x2 -= Settings.get("gameSpeed") * Settings.get("deltaTime");
        const w = Settings.get("gameWidth");
        if (this.x1 + w <= 0) this.x1 = this.x2 + w;
        if (this.x2 + w <= 0) this.x2 = this.x1 + w;
        for (const component of this.components){
            component.update();
        }
    }

    render() {
        Renderer.drawImage(this.img, this.x1, Settings.get("gameHeight") - 192, Settings.get("gameWidth"), 192);
        Renderer.drawImage(this.img, this.x2, Settings.get("gameHeight") - 192, Settings.get("gameWidth"), 192);
    }
}
export default Ground;