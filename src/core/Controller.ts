// Controller.ts
import Component from "./Component";
import InputHandler from "./InputHandler";
import Transform from "./Transform";
import RigidBody from "./RigidBody";
import { Settings } from "./Settings";

class Controller extends Component {
    private speed = Settings.get("playerSpeed") ?? 200; // pixels/sec
    private rb: RigidBody;
    private transform: Transform;

    constructor(gameObject: { getComponent: any }) {
        super();
        this.rb = gameObject.getComponent(RigidBody)!;
        this.transform = gameObject.getComponent(Transform)!;
    }

    update() {
        let dirX = 0, dirY = 0;
        if (InputHandler.isKeyDown("ArrowLeft"))  dirX -= 80;
        if (InputHandler.isKeyDown("ArrowRight")) dirX += 80;
        if (InputHandler.isKeyDown("ArrowUp"))    dirY -= 80;
        if (InputHandler.isKeyDown("ArrowDown"))  dirY += 80;
        this.rb.addForce({ x: dirX, y: dirY });
    }
}
export default Controller;