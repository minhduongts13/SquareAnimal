// SquarePoolManager.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import { IMAGES } from "../../constant/images";
import { SceneKeys } from "../../constant/SceneKeys";
import Square from "./Square";

class SquarePoolManager {
    private static pool: Square[] = [];
    static create(){
        this.pool = [];
        for (let i = 0; i < 14; i++){
            this.pool.push(new Square(i));
        }
    }

    static get(): Square {  
        return this.pool.pop()!;
    }

    static getAll(): Square[]{
        return this.pool;
    }

    static release(square: Square) {
        square.reset();       
        this.pool.push(square); 
    }
}
export default SquarePoolManager;