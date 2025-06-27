// ObstaclePoolManager.ts
import BoxCollider from "../../../core/component/collider/BoxCollider";
import { IMAGES } from "../../constant/images";
import { SceneKeys } from "../../constant/SceneKeys";
import Obstacle from "./Obstacle";

class ObstaclePoolManager {
    private static pool: Obstacle[] = [];

    static create(){
        this.pool = [];
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
        
        let ob5 = new Obstacle(IMAGES.OBSTACLE_5.KEY, IMAGES.OBSTACLE_5.WIDTH, IMAGES.OBSTACLE_5.HEIGHT);
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 0, 448 - 32, 32, 32));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 32, 448 - 64, 32, 64));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 64, 448 - 96, 32, 96));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 96, 448 - 128, 32, 128));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 128, 448 - 160, 96, 160));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 224, 448 - 128, 32, 96));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 256, 448 - 32, 96, 32));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 352, 448 - 64, 32, 64));
        ob5.addComponent(new BoxCollider(ob5.getTransform, SceneKeys.OBSTACLE.TAG, 384, 448 - 96, 64, 96));
        
        let ob6 = new Obstacle(IMAGES.OBSTACLE_6.KEY, IMAGES.OBSTACLE_6.WIDTH, IMAGES.OBSTACLE_6.HEIGHT);
        ob6.addComponent(new BoxCollider(ob6.getTransform, SceneKeys.OBSTACLE.TAG, 0, 448 - 128, 32, 128));
        ob6.addComponent(new BoxCollider(ob6.getTransform, SceneKeys.OBSTACLE.TAG, 96, 448 - 128, 32, 128));
        ob6.addComponent(new BoxCollider(ob6.getTransform, SceneKeys.OBSTACLE.TAG, 96*2, 448 - 128, 32, 128));
        ob6.addComponent(new BoxCollider(ob6.getTransform, SceneKeys.OBSTACLE.TAG, 96*3, 448 - 128, 32, 128));
        ob6.addComponent(new BoxCollider(ob6.getTransform, SceneKeys.OBSTACLE.TAG, 96*4, 448 - 128, 32, 128));

        let ob7 = new Obstacle(IMAGES.OBSTACLE_7.KEY, IMAGES.OBSTACLE_7.WIDTH, IMAGES.OBSTACLE_7.HEIGHT);
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 0, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.TAG, 64, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 64*2, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.TAG, 64*3, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 64*4, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.TAG, 64*5, 448 - 64, 64, 64));
        ob7.addComponent(new BoxCollider(ob7.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 64*6, 448 - 64, 64, 64));
        
        let ob8 = new Obstacle(IMAGES.OBSTACLE_8.KEY, IMAGES.OBSTACLE_8.WIDTH, IMAGES.OBSTACLE_8.HEIGHT);
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 0, 448 - 32*4, 32, 32*2));
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.TAG, 0, 448 - 32*2, 32, 32*2));

        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 96, 448 - 32*5, 32, 32*2));
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.TAG, 96, 448 - 32*3, 32, 32*3));

        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 96*2, 448 - 32*7, 32, 32*2));
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.TAG, 96*2, 448 - 32*5, 32, 32*3));

        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 96*3, 448 - 32*5, 32, 64));
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.TAG, 96*3, 448 - 32*3, 32, 32*3));

        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.SPIKE_TAG, 96*4, 448 - 32*8, 32, 64));
        ob8.addComponent(new BoxCollider(ob8.getTransform, SceneKeys.OBSTACLE.TAG, 96*4, 448 - 32*6, 32, 32*3));

        if (ObstaclePoolManager.pool.length == 0) {
            this.pool.push(ob1, ob2, ob3, ob4, ob5, ob6, ob7, ob8);
        }
        else {
            for (let ob of ObstaclePoolManager.pool){
                ob.reset();
            }
        }
    }

    static get(index : number): Obstacle {  
        this.pool[index].active = true;
        return this.pool[index];
    }

    static getAll(): Obstacle[]{
        return this.pool;
    }

    static release(obstacle: Obstacle) {
        obstacle.active = false;
        console.log(1)
        obstacle.reset();        
    }
}
export default ObstaclePoolManager;