import { Engine } from "../core/engine";
import { Sprite } from "../file/sprite";
import { Renderer } from "./renderer";

export class SpriteRenderer extends Renderer {
    public sprite: Sprite;

    constructor(sprite: Sprite) {
        super();
        this.sprite = sprite;
    }

    public update(): void {
        if (!this.sprite.isLoaded) {
            // console.error("Not image to render for Sprite Renderer", this);
            return;
        }
        Engine.ctx.save();
        Engine.ctx.drawImage(this.sprite.img, this.gameObject.position.x, this.gameObject.position.y,
            this.sprite.width, this.sprite.height);
        Engine.ctx.stroke();
        Engine.ctx.restore();
    }


}