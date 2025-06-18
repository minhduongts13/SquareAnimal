// Settings.ts
export class Settings {
    private static prop : Record<string, any> = {};

    static get(property : string): any {
        return this.prop[property];
    }

    static add(property : string, value : any): void {
        if (!this.prop.hasOwnProperty(property)){
            Object.defineProperty(this, property, {
                configurable: true,
                enumerable: true,
                get: () => this.prop[property],
                set: (val) => { this.prop[property] = val; },
            });
        }
        this.prop[property] = value;
    }

    static remove(property : string): boolean{
        if (this.prop.hasOwnProperty(property)){
            delete this.prop[property];
            return true;
        }
        return false;
    }
}