import { IComponent } from "../core/component";
import { GameObject } from "../core/game-object";
import { Engine } from "../core/engine";
import { Sprite } from "../file/sprite";

export class SpriteRenderer implements IComponent {
    public gameObject: GameObject;
    public sprite: Sprite;

    constructor(sprite: Sprite) {
        this.sprite = sprite;
    }

    public update(): void {
        if (!this.sprite.isLoaded) {
            // console.error("Not image to render for Sprite Renderer", this);
            return;
        }
        Engine.ctx.save();
        Engine.ctx.drawImage(this.sprite.img, this.gameObject.position.x, this.gameObject.position.y);
        Engine.ctx.stroke();
        Engine.ctx.restore();
    }


}