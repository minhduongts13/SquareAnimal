// InputHandler.ts
import Pointer from "./Pointer";
class InputHandler {
    private static keys: Record<string, boolean> = {};
    private static mouseButtons: Record<number, boolean> = {};

    public static init(canvas: HTMLCanvasElement) {
        // Keyboard
        window.addEventListener("keydown",  InputHandler.onKeyDown);
        window.addEventListener("keyup",    InputHandler.onKeyUp);

        // Mouse 
        canvas.addEventListener("mousemove", InputHandler.onMouseMove);
        canvas.addEventListener("mousedown", InputHandler.onMouseDown);
        canvas.addEventListener("mouseup",   InputHandler.onMouseUp);

    }

    private static onKeyDown(e: KeyboardEvent) {
        InputHandler.keys[e.code] = true;
    }

    private static onKeyUp(e: KeyboardEvent) {
        InputHandler.keys[e.code] = false;
    }

    private static onMouseMove(e: MouseEvent) {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        Pointer.mouseMove(e);
    }

    private static onMouseDown(e: MouseEvent) {
        InputHandler.mouseButtons[e.button] = true;
    }

    private static onMouseUp(e: MouseEvent) {
        InputHandler.mouseButtons[e.button] = false;
    }

    public static isKeyDown(code: string): boolean {
        return !!InputHandler.keys[code];
    }

    public static isMouseDown(button: number = 0): boolean {
        return !!InputHandler.mouseButtons[button];
    }

    public static reset() {
        InputHandler.keys = {};
        InputHandler.mouseButtons = {};
    }
}
export default InputHandler;