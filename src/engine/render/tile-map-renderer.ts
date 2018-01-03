import { IComponent } from "../core/component.js";
import { GameObject } from "../core/game-object";
import { Tile } from "../file/tile";

export class TileMapRenderer implements IComponent {
    public gameObject: GameObject;
    public gridHeight = 32;
    public girdWidth = 32;
    public tiles: Array<Tile>;

}