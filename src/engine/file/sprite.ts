import { Engine } from "../core/engine.js";

export class Sprite {
    public img: HTMLImageElement;
    public isLoaded = false;
    private _width: number;
    private _height: number;

    constructor(imgPath: string, width: number = null, height: number = null) {
        this._height = height;
        this._width = width;
        this.img = new Image();
        this.img.src = imgPath;
        this.img.onload = () => {
            this.isLoaded = true;
        }
    }

    public set width(value: number) {
        this._width = value;
    }

    public get width(): number {
        if (this._width) return this._width;
        return this.img.naturalWidth;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get height(): number {
        if (this._height) return this._height;
        return this.img.naturalHeight;
    }

}
