import { GameObject } from "./game-object.js";

export interface IComponent {
    gameObject: GameObject;
    awake?(): void;
    start?(): void;
    update?(): void;
}
