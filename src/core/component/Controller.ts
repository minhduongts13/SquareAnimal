// Controller.ts
import InputHandler from "../manager/InputHandler";
import Transform from "./Transform";
import RigidBody from "./RigidBody";
import Settings from "../manager/Settings";
import Player from "../../game/GamePlay/player/Player";

class Controller implements Engine.IComponent {
    private speed = Settings.get("playerSpeed") ?? 200; // pixels/sec
    private rb: RigidBody;
    private transform: Transform;
    private player : Player;
    private jumped = false;

    constructor(gameObject: { getComponent: any }) {
        this.rb = gameObject.getComponent(RigidBody)!;
        this.transform = gameObject.getComponent(Transform)!;
        this.player = gameObject as Player;
    }

    update() {
        const space = InputHandler.isKeyDown("Space");
        const mouse = InputHandler.isMouseDown(0);

        if ((space || mouse) && !this.jumped) {
            this.jumped = true;
            const { x, y } = this.player.getTransform.position;
            // this.player.getTransform.update(x, y - 32);
            this.player.placePlatform();
        }

        if (!space && !mouse) {
        this.jumped = false;
        }
    }
}
export default Controller;