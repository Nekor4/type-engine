import { GameObject } from "./game-object";
import { Collision } from "../colliders";

export class Engine {
    private _canvas: HTMLCanvasElement;
    private inGameObjects: Array<GameObject> = [];
    private isPauzed = false;
    public static ctx: CanvasRenderingContext2D;

    /** Creates new canvas element on constructor
     *  @param width Width of canvas.
     *  @param height Height of canvas. */
    constructor(width = 1280, height = 720) {
        this.createCanvas(width, height);
        console.log("Engine created!");
    }

    private createCanvas(width: number, height: number): void {
        this._canvas = document.createElement("canvas");
        // document.body.appendChild(this.canvas);
        this._canvas.width = 1280;
        this._canvas.height = 720;
        this._canvas.style.border = "1px solid";
        Engine.ctx = <CanvasRenderingContext2D>this._canvas.getContext("2d");
    }

    /** Adds game object to game objects array. */
    public add(gameObject: GameObject): void {
        this.inGameObjects.push(gameObject);
    }

    /** Starts game loop. */
    public start(): void {
        if (!this.isPauzed) {
            console.log("Game starts!");
            this.startObjects();
        } else {
            console.log("Game resumed!");
        }
        this.isPauzed = false;
        this.gameLoop();
    }

    /** Pauses game loop. */
    public pauze(): void {
        console.log("Game paused!");
        this.isPauzed = true;
    }

    /** Returns canvas element. */
    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    private startObjects(): void {
        for (let i = 0; i < this.inGameObjects.length; i++)
            if (this.inGameObjects[i])
                this.inGameObjects[i].componentsStart();
    }

    private gameLoop(): void {
        if (this.isPauzed) return;
        requestAnimationFrame(() => { this.gameLoop() });
        Engine.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        Collision.DetectCollistion(this.inGameObjects);

        for (let i = 0; i < this.inGameObjects.length; i++) {
            if (this.inGameObjects[i])
                this.inGameObjects[i].componentsUpdateLoop();
        }

    }
}