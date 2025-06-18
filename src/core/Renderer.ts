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

    static drawCirle = (x : number, y : number, r : number, a1 : number, a2 : number, option : {}) => {
        Object.assign(Renderer.ctx, option);
        Renderer.ctx.beginPath();
        Renderer.ctx.arc(x, y, r, a1, a2);
        Renderer.ctx.closePath();
        Renderer.ctx.fill();
    }

    static drawRect = (x : number, y : number, w : number, h : number, option : {}) => {
        Object.assign(Renderer.ctx, option);
        Renderer.ctx.beginPath();
        Renderer.ctx.rect(x, y, w, h);
        Renderer.ctx.closePath();
        Renderer.ctx.fill();
    }

    static drawImage = (image: HTMLImageElement, x : number, y : number, w : number, h : number) => {
        Renderer.ctx.drawImage(image, x, y, w, h);   
    }

    static setScreenSize(){
        let w = window.innerWidth;
        let h = window.innerHeight;
        Renderer.canvas.width = w;
        Renderer.canvas.height = h;
    }
}

export default Renderer