// Player.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import Controller from "../../../core/component/Controller";
import RigidBody from "../../../core/component/RigidBody";
import Transform from "../../../core/component/Transform";
import GameObject from "../../../core/gameobject/GameObject";
import SceneManager from "../../../core/manager/SceneManager";
import SpriteRenderer from "../../../core/renderer/SpriteRenderer";
import { IMAGES } from "../../constant/images";
import { SceneKeys } from "../../constant/SceneKeys";
import Square from "./Square";
import SquarePoolManager from "./SquarePoolManager";

class Player extends GameObject {
    constructor(){
        super(new Transform(SceneKeys.PLAYER.INITIAL_POS.x, SceneKeys.PLAYER.INITIAL_POS.y, 32, 32));
        this.renderer = new SpriteRenderer(
            {
                key: IMAGES.CAT_CHAR.KEY,
                frameWidth: 32,
                frameHeight: 32,
                frameCount: 6
            }
        );
        let controller = new Controller(this);
        let collider = new BoxCollider(this.transform, SceneKeys.PLAYER.TAG);
        let collider2 = new BoxCollider(this.transform, SceneKeys.PLAYER.HEAD, 32, 4, 1, 24);
        let rigidBody = new RigidBody(this.transform, {x : 0, y : 0}, 100, true);
        this.addComponent(collider);
        this.addComponent(collider2);
        this.addComponent(rigidBody);
        this.addComponent(controller);
    }

    public placePlatform(): void {
        const x = this.transform.position.x;
        const y = this.transform.position.y + this.transform.size.height;
        let square = SquarePoolManager.get();
        square.work(x, y);
        this.children.push(square);
        if (this.transform.position.y < 32) SceneManager.switchScene("gameover")
    }

    public releaseSquare(id : number): void{
        for (let i = 0; i < this.children.length; i++){
            if ((this.children[i] as Square).getId() == id){
                SquarePoolManager.release(this.children[i] as Square);
                this.children.splice(i, 1);
            }
        }
    }

    public reset(): void {
        this.transform.update(SceneKeys.PLAYER.INITIAL_POS.x, SceneKeys.PLAYER.INITIAL_POS.y);
        for (let square of this.children){
            SquarePoolManager.release(square as Square);
        }
        this.children = [];
    }
}
export default Player;