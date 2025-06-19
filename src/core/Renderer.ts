class Renderer {
    private static canvas : HTMLCanvasElement;
    private static ctx : CanvasRenderingContext2D;

    static init(){
        Renderer.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        Renderer.ctx = Renderer.canvas.getContext("2d")!;
    }

    static clear(){
        Renderer.ctx.clearRect(0, 0, Renderer.canvas.width, Renderer.canvas.height);
    }

    static drawCirle = (x : number, y : number, r : number, a1 : number, a2 : number, option : Record<string, any>) => {
        Object.assign(Renderer.ctx, option);
        Renderer.ctx.beginPath();
        Renderer.ctx.arc(x, y, r, a1, a2);
        Renderer.ctx.closePath();
        Renderer.ctx.fill();
    }

    static drawRect = (x : number, y : number, w : number, h : number, option : Record<string, any>) => {
        Object.assign(Renderer.ctx, option);
        Renderer.ctx.beginPath();
        Renderer.ctx.rect(x, y, w, h);
        Renderer.ctx.closePath();
        Renderer.ctx.fill();
    }

    static drawImage = (image: HTMLImageElement, x : number, y : number, w : number, h : number) => {
        Renderer.ctx.drawImage(image, x, y, w, h);   
    }

    static drawAnimation = (image : HTMLImageElement, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) => {
        Renderer.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }

    static drawText = (text : string, x : number, y : number, option : Record<string, any>) => {
        if (option["font"])       Renderer.ctx.font = option["font"];
        if (option["fillStyle"])  Renderer.ctx.fillStyle = option["fillStyle"];
        if (option["textAlign"])  Renderer.ctx.textAlign = option["textAlign"];
        if (option["textBaseline"]) Renderer.ctx.textBaseline = option["textBaseline"];

        Renderer.ctx.fillText(text, x, y);
    }

    static setScreenSize(){
        let w = 284;
        let h = 500;
        Renderer.canvas.width = w;
        Renderer.canvas.height = h;
    }

    static getCanvas(): HTMLCanvasElement{
        return Renderer.canvas;
    }

    static getContext() : CanvasRenderingContext2D {
        return Renderer.ctx;
    }
}

export default Renderer