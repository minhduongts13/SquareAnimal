// ObstaclePoolManager.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import { IMAGES } from "../../constant/images";
import { SceneKeys } from "../../constant/SceneKeys";
import Obstacle from "./Obstacle";

class ObstaclePoolManager {
    private static pool: Obstacle[] = [];

    static create(){
        let ob1 = new Obstacle(IMAGES.OBSTACLE_1.KEY, IMAGES.OBSTACLE_1.WIDTH, IMAGES.OBSTACLE_1.HEIGHT);
        ob1.addComponent(new BoxCollider(ob1.getTransform, SceneKeys.OBSTACLE.TAG,  0, 0, 96, 6*32));
        ob1.addComponent(new BoxCollider(ob1.getTransform, SceneKeys.OBSTACLE.TAG, 0, 9*32, 96, 5*32));
        
        let ob2 = new Obstacle(IMAGES.OBSTACLE_2.KEY, IMAGES.OBSTACLE_2.WIDTH, IMAGES.OBSTACLE_2.HEIGHT);
        ob2.addComponent(new BoxCollider(ob2.getTransform, SceneKeys.OBSTACLE.TAG));
        
        let ob3 = new Obstacle(IMAGES.OBSTACLE_3.KEY, IMAGES.OBSTACLE_3.WIDTH, IMAGES.OBSTACLE_3.HEIGHT);
        ob3.addComponent(new BoxCollider(ob3.getTransform, SceneKeys.OBSTACLE.TAG, 0, 6*32, 96, 8*32));
        
        let ob4 = new Obstacle(IMAGES.OBSTACLE_4.KEY, IMAGES.OBSTACLE_4.WIDTH, IMAGES.OBSTACLE_4.HEIGHT);
        ob4.addComponent(new BoxCollider(ob4.getTransform, SceneKeys.OBSTACLE.TAG, 0, 0, 32, 64));
        ob4.addComponent(new BoxCollider(ob4.getTransform, SceneKeys.OBSTACLE.TAG, 0, 4*32, 32, 64));
        ob4.addComponent(new BoxCollider(ob4.getTransform, SceneKeys.OBSTACLE.TAG, 0, 8*32, 32, 64));
        ob4.addComponent(new BoxCollider(ob4.getTransform, SceneKeys.OBSTACLE.TAG, 0, 12*32, 32, 64));
        
        if (ObstaclePoolManager.pool.length == 0) this.pool.push(ob1, ob2, ob3, ob4);
        else {
            for (let ob of ObstaclePoolManager.pool){
                ob.reset();
            }
        }
    }

    static get(index : number): Obstacle {  
        return this.pool[index];
    }

    static getAll(): Obstacle[]{
        return this.pool;
    }

    static release(obstacle: Obstacle) {
        obstacle.active = false;
        obstacle.reset();        
    }
}
export default ObstaclePoolManager;