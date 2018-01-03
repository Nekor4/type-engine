import { ColliderType, Collider } from "./collider";
import { RectCollider } from "./rect";
import { CircleCollider } from "./circle";
import { GameObject, Vector2 } from "../core";

export class Collision {


    public static DetectCollistion(inGameObjects: Array<GameObject>) {
        for (let i = 0; i < inGameObjects.length; i++)
            for (let j = i + 1; j < inGameObjects.length; j++) {

                const aCollider = inGameObjects[i].collider;
                const bCollider = inGameObjects[j].collider;

                if (aCollider && bCollider) {
                    if (this.CollisionTest(aCollider, bCollider)) {
                        aCollider.onCollision(bCollider);
                        bCollider.onCollision(aCollider);
                    }
                }

            }
    }

    public static CollisionTest(collider: Collider, otherCollider: Collider): boolean {
        let isCollision = false;
        switch (collider.colliderType) {
            case ColliderType.Circle:
                isCollision = this.CircleCollisionTest(<CircleCollider>collider, otherCollider);
                break;
            // case ColliderType.LINE:
            //     // this.CircleCollisionTest(collider, otherCollider);
            //     break;
            case ColliderType.Rect:
                isCollision = this.RectCollisionTest(<RectCollider>collider, otherCollider)
                break;
            // case ColliderType.POLYGON:
            //     // this.CircleCollisionTest(collider, otherCollider);
            //     break;

            default:
                break;
        }
        return isCollision;
    }

    public static CircleCollisionTest(circleCollider: CircleCollider, otherCollider: Collider): boolean {
        let isCollision = false;
        switch (otherCollider.colliderType) {
            case ColliderType.Circle:
                isCollision = this.CircleCircle(circleCollider, <CircleCollider>otherCollider);
                break;
            // case COLLIDER.LINE:
            //     // this.CircleCollisionTest(collider, otherCollider);
            //     break;
            case ColliderType.Rect:
                // this.CircleCollisionTest(collider, otherCollider);
                break;
            // case COLLIDER.POLYGON:
            //     // this.CircleCollisionTest(collider, otherCollider);
            //     break;

            default:
                break;
        }

        return isCollision;
    }

    public static RectCollisionTest(rectCollider: RectCollider, otherCollider: Collider): boolean {
        let isCollision = false;
        switch (otherCollider.colliderType) {
            case ColliderType.Rect:
                isCollision = this.RectangleRectangle(rectCollider, <RectCollider>otherCollider);
                break;

            default:
                break;
        }

        return isCollision;
    }

    public static CircleCircle(a: CircleCollider, b: CircleCollider): boolean {
        if (a.gameObject.position && b.gameObject.position) {
            if (Vector2.getDistance(a.gameObject.position, b.gameObject.position) <= a.radius + b.radius)
                return true;
        }

        return false;
    }

    public static RectangleRectangle(a: RectCollider, b: RectCollider): boolean {
        // console.log(1);
        let xoverlap: boolean = false;
        let yoverlap: boolean = false;
        if (a.gameObject.position.x <= b.gameObject.position.x) {
            if (a.gameObject.position.x + a.dimension.x >= b.gameObject.position.x) {
                xoverlap = true;
            }
        }
        else if (b.gameObject.position.x + b.dimension.x >= a.gameObject.position.x) {
            xoverlap = true;

        }

        if (a.gameObject.position.y <= b.gameObject.position.y) {
            if (a.gameObject.position.y + a.dimension.y >= b.gameObject.position.y) {
                yoverlap = true;
            }
        }
        else if (b.gameObject.position.y + b.dimension.y >= a.gameObject.position.y) {
            yoverlap = true;

        }

        if (xoverlap === true && yoverlap === true) {
            return true;
        }

        return false;
    }

}