import { IComponent } from "../core/component";
import { GameObject } from "../core/game-object";

export class Renderer implements IComponent {
    public gameObject: GameObject;
}