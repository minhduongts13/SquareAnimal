// Pointer.ts
class Pointer {
    private static x : number;
    private static y : number;
    private static canvas : HTMLCanvasElement;

    static init() {
        Pointer.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        Pointer.canvas.addEventListener("mousemove", this.mouseMove);
    }

    static set position(pos : {x : number, y : number}){
        Pointer.x = pos.x;
        Pointer.y = pos.y;
    }

    static get position(){
        return {x : Pointer.x, y : Pointer.y};
    }

    static mouseMove = (event: MouseEvent): void => {
        const rect = Pointer.canvas.getBoundingClientRect();
        
        const scaleX = Pointer.canvas.width  / rect.width;
        const scaleY = Pointer.canvas.height / rect.height;

        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top)  * scaleY;
        Pointer.position = { x, y };  
    }
}
export default Pointer;