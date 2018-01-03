import { Vector2 } from "./vector2";
import { IComponent } from "./component";
import { Collider } from "../colliders/collider";
import { Body } from "../physics/body";
import { Renderer } from "../render/renderer";

export class GameObject {
    public position = new Vector2();
    private _collider: Collider;
    private _body: Body;
    private _renderer: Renderer;
    private components: Array<IComponent> = [];

    public addComponent<T extends IComponent>(component: T): T {
        component.gameObject = this;

        if (component.awake)
            component.awake();

        this.components.push(component);

        if (component.start)
            component.start();

        if (component instanceof Collider)
            this._collider = component;
        if (component instanceof Body)
            this._body = component;
        if (component instanceof Renderer)
            this._renderer = component;

        return component;
    }

    public getComponent<T extends IComponent>(t: new () => T): T | null {
        let result: T | null = null;
        for (let c of this.components) {
            if (c instanceof t)
                result = <T>c;
        }
        return result;
    }

    public getComponents<T extends IComponent>(t: new (...args: any[]) => T): T[] {
        let result: T[] = [];
        for (let c of this.components) {
            if (c instanceof t)
                result.push(<T>c);
        }

        return result;
    }

    public componentsStart() {
        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];
            if (component.start) component.start();
        }
    }

    public componentsUpdateLoop() {
        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];
            if (component.update) {
                component.update();
            }

        }
    }

    public get collider(): Collider {
        return this._collider;
    }

    public get body(): Body {
        return this._body;
    }

    public get renderer(): Renderer {
        return this._renderer;
    }

}