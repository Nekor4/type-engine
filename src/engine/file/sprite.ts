import { Engine } from "../core/engine.js";

export class Sprite {
    public isLoaded = false;
    public img: HTMLImageElement;

    constructor(imgPath: string) {
        this.img = new Image();
        this.img.src = imgPath;
        this.img.onload = () => {
            this.isLoaded = true;
        }
    }

}
