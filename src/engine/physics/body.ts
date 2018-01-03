import { IComponent, GameObject, Vector2 } from "../core";
import { Collider } from '../colliders';
import { RectCollider } from "../../index";

export class Body implements IComponent {
    public gameObject: GameObject;

    public type: BodyType = BodyType.Dynamic;
    public collisionSolution: CollisionSolution = CollisionSolution.Displace;

    public velocity = new Vector2();
    public linearDrag = 0.5;
    public mass = 1;
    public gravity = 1;

    public update(): void {
        this.gameObject.position.add(this.velocity);
        this.velocity.y += this.gravity;
        // this.simulateDrag();
    }

    // private simulateDrag(): void {
    //     if (this.velocity.x === 0 && this.velocity.y === 0)
    //         return;

    //     this.velocity.x = NumberUtils.goToZero(this.velocity.x, this.linearDrag);
    //     this.velocity.y = NumberUtils.goToZero(this.velocity.y, this.linearDrag);
    // }


    public resolveRectToRectStaticCollision(other: RectCollider): void {
        const self: RectCollider = <RectCollider>this.gameObject.collider;

        // Find the mid points of the self and other
        const selfMidX = self.midX;
        const selfMidY = self.midY;
        const otherMidX = other.midX;
        const otherMidY = other.midY;

        // To find the side of entry calculate based on
        // the normalized sides
        const dx = (otherMidX - selfMidX) / other.halfWidth;
        const dy = (otherMidY - selfMidY) / other.halfHeight;
        console.log(dx, dy);
        // Calculate the absolute change in x and y
        const absDX = Math.abs(dx);
        const absDY = Math.abs(dy);

        // If the distance between the normalized x and y
        // position is less than a small threshold (.1 in this case)
        // then this object is approaching from a corner
        if (Math.abs(absDX - absDY) < .1) {

            // If the player is approaching from positive X
            if (dx < 0) {

                // Set the player x to the right side
                self.gameObject.position.x = other.rightX;

                // If the player is approaching from negative X
            } else {

                // Set the player x to the left side
                self.gameObject.position.x = other.leftX - self.dimension.x;
            }

            // If the player is approaching from positive Y
            if (dy < 0) {

                // Set the player y to the bottom
                self.gameObject.position.y = other.bottomY;

                // If the player is approaching from negative Y
            } else {

                // Set the player y to the top
                self.gameObject.position.y = other.topY - self.dimension.y;
            }

            // Randomly select a x/y direction to reflect velocity on
            if (Math.random() < .5) {

                // Reflect the velocity at a reduced rate
                this.velocity.x = -this.velocity.x * other.restitution;

                // If the object's velocity is nearing 0, set it to 0
                // STICKY_THRESHOLD is set to .0004
                if (Math.abs(this.velocity.x) < .0004) {
                    this.velocity.x = 0;
                }
            } else {

                this.velocity.y = -this.velocity.y * other.restitution;
                if (Math.abs(this.velocity.y) < .0004) {
                    this.velocity.y = 0;
                }
            }

            // If the object is approaching from the sides
        } else if (absDX > absDY) {

            // If the player is approaching from positive X
            if (dx < 0) {
                self.gameObject.position.x = other.rightX;

            } else {
                // If the player is approaching from negative X
                self.gameObject.position.x = other.leftX - self.dimension.x;
            }

            // Velocity component
            this.velocity.x = -this.velocity.x * other.restitution;

            if (Math.abs(this.velocity.x) < 0.0004) {
                this.velocity.x = 0;
            }

            // If this collision is coming from the top or bottom more
        } else {

            // If the player is approaching from positive Y
            if (dy < 0) {
                self.gameObject.position.y = other.bottomY;

            } else {
                // If the player is approaching from negative Y
                self.gameObject.position.y = other.topY - self.dimension.y;
            }

            // Velocity component
            this.velocity.y = -this.velocity.y * other.restitution;
            if (Math.abs(this.velocity.y) < 0.0004) {
                this.velocity.y = 0;
            }
        }
    };
}


enum BodyType {
    Kinematic,
    Dynamic
}
enum CollisionSolution {
    Displace,
    Elastic
}