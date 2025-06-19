// Transform.ts
import Component from "./Component";
class Transform extends Component {
    private x : number;
    private y : number;
    private width : number;
    private height : number;
    private scaleX : number;
    private scaleY : number;
    private rotation : number;

    constructor(x: number = 0, y: number = 0, width: number = 100, height: number = 100, scaleX: number = 1, scaleY: number = 1, rotation: number = 0) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation = rotation;
    }

    public get position(){
        return {x : this.x, y : this.y};
    }

    public get size(){
        return {width : this.width, height : this.height};
    }

    public get scale(){
        return {scaleX : this.scaleX, scaleY : this.scaleY};
    }
    
    public get rotationAngle(){
        return this.rotation;
    }

    update(x: number = this.x, y: number = this.y, width: number = this.width, height: number = this.height, scaleX: number = this.scaleX, scaleY: number = this.scaleY, rotation: number = this.rotation){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation = rotation;
    }
}
export default Transform;