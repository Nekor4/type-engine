import { Vector2 } from "../core/vector2";
import { GameObject } from "../core/game-object";
import { IComponent } from "../core/component";

export class Collider implements IComponent {
    public gameObject: GameObject;
    public colliderType: ColliderType;

    public onCollision(other: Collider): void {

    }

    constructor(colliderType: ColliderType) {
        this.colliderType = colliderType;
    }

    public update(): void {

    }

}

export enum ColliderType {
    Rect,
    Circle
}