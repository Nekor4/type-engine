import { Vector2 } from "../core/vector2";
import { GameObject } from "../core/game-object";
import { Collision } from "./collisions";
import { Collider, ColliderType } from "./collider";


export class CircleCollider extends Collider {
    public radius: number;

    constructor(radius = 5) {
        super(ColliderType.Circle);
        this.radius = radius;
    }

    // public onCollision(): void {
    //     console.log("Collision");
    // }

}