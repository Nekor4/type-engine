export class Vector2 {
    public x: number;
    public y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    public duplicate(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    public static add(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    public add(a: Vector2): void {
        this.x += a.x;
        this.y += a.y;
    }

    public static dotProduct(a: Vector2, b: Vector2): number {
        return a.x * b.x + a.y * b.y;
    }

    public static subtract(a: Vector2, b: Vector2): Vector2 {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    public subtract(a: Vector2 | number): void {
        if (typeof (a) === "number") {
            this.x -= a;
            this.y -= a;
        } else {
            this.x -= a.x;
            this.y -= a.y;
        }
    }

    public multiply(value: number): void {
        this.x *= value;
        this.y *= value;
    }

    public static getDistance(point1: Vector2, point2: Vector2): number {
        let distance: number =
            Math.pow(point2.x - point1.x, 2) +
            Math.pow(point2.y - point1.y, 2);
        distance = Math.sqrt(distance);
        return distance;
    }

    magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


    public magSq(): number {
        return this.x * this.x + this.y * this.y;
    }

    public normalize(magnitude: number = 1): Vector2 {
        var len: number = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x /= len;
        this.y /= len;
        return this;
    }

    public get(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }
    public set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}