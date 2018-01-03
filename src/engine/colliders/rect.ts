import { Vector2 } from "../core/vector2";
import { ColliderType, Collider } from "./collider";

export class RectCollider extends Collider {
    private _dimension: Vector2;
    public halfWidth: number;
    public halfHeight: number;
    public restitution = 0;

    constructor(dimension = new Vector2) {
        super(ColliderType.Rect);
        this.dimension = dimension;
    }

    public onCollision(other: Collider) {
        if (other instanceof RectCollider)
            if (this.gameObject.body)
                this.gameObject.body.resolveRectToRectStaticCollision(other);
    }

    public get dimension() {
        return this._dimension;
    }

    public set dimension(value: Vector2) {
        this._dimension = value;
        this.halfWidth = value.x * .5;
        this.halfHeight = value.y * .5;
    }

    public get midX() {
        return this.halfWidth + this.gameObject.position.x;
    };

    public get midY() {
        return this.halfHeight + this.gameObject.position.y;
    };

    public get rightX(): number {
        return this.gameObject.position.x + this.dimension.x;
    }
    public get leftX(): number {
        return this.gameObject.position.x;
    }
    public get topY(): number {
        return this.gameObject.position.y;
    }
    public get bottomY(): number {
        return this.gameObject.position.y + this.dimension.y;
    }
}