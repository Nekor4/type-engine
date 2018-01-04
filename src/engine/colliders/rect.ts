import { Vector2 } from "../core/vector2";
import { ColliderType, Collider } from "./collider";
import { SpriteRenderer } from "../render/index";
import { Sprite } from "../../index";

export class RectCollider extends Collider {
    private _dimension: Vector2;
    public halfWidth: number;
    public halfHeight: number;
    public restitution = 0;

    constructor() {
        super(ColliderType.Rect);

    }

    public awake(): void {
        if (this.gameObject.renderer instanceof SpriteRenderer) {
            const spriteRenderer = <SpriteRenderer>this.gameObject.renderer;
            this.dimension = new Vector2(
                spriteRenderer.sprite.width,
                spriteRenderer.sprite.height);
        }
    }

    public onCollision(other: Collider): void {
        if (other instanceof RectCollider)
            if (this.gameObject.body)
                this.gameObject.body.resolveRectToRectStaticCollision(other);
    }

    public get dimension(): Vector2 {
        return this._dimension;
    }

    public set dimension(value: Vector2) {
        this._dimension = value;
        this.halfWidth = value.x * .5;
        this.halfHeight = value.y * .5;
    }

    public get midX(): number {
        return this.halfWidth + this.gameObject.position.x;
    };

    public get midY(): number {
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