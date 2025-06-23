// Button.ts
import GameObject from "./GameObject";
import InputHandler from "../manager/InputHandler";
import Transform from "../component/Transform";
import Renderer from "../renderer/Renderer";
import Pointer from "../manager/Pointer";
class Button extends GameObject {
    text: string;
    private wasDown = false;
    private color : string;
    private hoverColor : string;

    onClick: () => void;

    isHover(){
        let x = this.transform.position.x;
        let y = this.transform.position.y;
        let w = this.transform.size.width;
        let h = this.transform.size.height;
        if (Pointer.position.x >= x && Pointer.position.x <= x + w &&
            Pointer.position.y >= y && Pointer.position.y <= y + h) {
            return true;
        }
        return false;
    }

    constructor(x: number, y: number, w: number, h: number, text: string, 
        onClick: () => void, color : string = "#aaa", hoverColor : string = "#ccc") {
        super(
            new Transform(x, y, w, h)
        );
        this.text = text;
        this.onClick = onClick;
        this.color = color;
        this.hoverColor = hoverColor;
    }

    update() {
        const hover = this.isHover();
        const mouseDown = InputHandler.isMouseDown(0);

        if (hover && this.wasDown && !mouseDown) {
            this.onClick();
        }
        this.wasDown = mouseDown;
    }

    render() {
        let x = this.transform.position.x;
        let y = this.transform.position.y;
        let w = this.transform.size.width;
        let h = this.transform.size.height;
        Renderer.drawRect(x, y, w, h, {
            fillStyle: this.isHover() ? this.hoverColor : this.color
        });
        Renderer.drawText(this.text, x + w/2, y + h/2, {
            textAlign: "center", textBaseline: "middle", fillStyle: "black", font: "20px Arial"
        });
    }
    
}

export default Button;
