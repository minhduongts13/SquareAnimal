// general.d.ts

declare namespace Engine {
    interface IScene {
        preload():void
        run():void
        create():void
    }

    interface ISceneManager {
        
    }

    interface IRenderer{
        render(x: number, y: number): void;
        update(): void;
    }

    interface IGameObject{
        render(): void;
        update(): void;
        getComponent<T extends Component>(ctor: Function): T | undefined;
        addComponent(component: Component): void;
        addChild(child: GameObject): void;
        get getTransform(): Transform;
    }

    interface IComponent {
        update(): void;
    }
}

interface IAnimatorConfig {
    key: string, frameWidth: number, frameHeight: number, frameCount: number
}

interface IImageConfig {
    key: string, width: number, height: number
}

interface IVec2{
    x : number
    y : number
}