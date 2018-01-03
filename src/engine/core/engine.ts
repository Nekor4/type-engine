import { GameObject } from "./game-object";
import { Collision } from "../colliders";

export class Engine {
    private canvas: HTMLCanvasElement;
    private inGameObjects: Array<GameObject> = [];
    public static ctx: CanvasRenderingContext2D;

    constructor(width = 1280, height = 720) {
        this.createCanvas(width, height);
        console.log("Engine created!");
    }

    private createCanvas(width: number, height: number): void {
        this.canvas = document.createElement("canvas");
        // document.body.appendChild(this.canvas);
        this.canvas.width = 1280;
        this.canvas.height = 720;
        this.canvas.style.border = "1px solid";
        Engine.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }

    public add(gameObject: GameObject): void {
        this.inGameObjects.push(gameObject);
    }

    public start(): void {
        console.log("Game starts!");
        this.startObjects();
        this.gameLoop();
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    private startObjects(): void {
        for (let i = 0; i < this.inGameObjects.length; i++)
            if (this.inGameObjects[i])
                this.inGameObjects[i].componentsStart();
    }

    private gameLoop(): void {
        requestAnimationFrame(() => { this.gameLoop() });
        Engine.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        Collision.DetectCollistion(this.inGameObjects);

        for (let i = 0; i < this.inGameObjects.length; i++) {
            if (this.inGameObjects[i])
                this.inGameObjects[i].componentsUpdateLoop();
        }

    }
}