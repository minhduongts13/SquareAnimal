// Pointer.ts
class Pointer {
    private static x : number;
    private static y : number;
    

    static init() {
        window.addEventListener("mousemove", this.mouseMove);
    }

    static set position(pos : {x : number, y : number}){
        Pointer.x = pos.x;
        Pointer.y = pos.y;
    }

    static get position(){
        return {x : Pointer.x, y : Pointer.y};
    }

    static mouseMove = (event: MouseEvent): void => {
        Pointer.position = {x : event.pageX, y : event.pageY}
    }
}
export default Pointer;