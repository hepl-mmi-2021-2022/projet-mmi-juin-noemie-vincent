import {settings} from "../../settings";

export class Head {
    private ctx: CanvasRenderingContext2D;
    private readonly sprite: HTMLImageElement;
    public x: number;
    public y: number;
    private readonly width: number;
    private readonly height: number;

    constructor(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        this.ctx = ctx;
        this.sprite = sprite;
        this.width = settings.dino.head.width;
        this.height = settings.dino.head.height;
        this.x = -this.width / 3;
        this.y = - this.height/2 - settings.fallingNecks.height;
        this.draw();
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.dino.head.sx,
            settings.dino.head.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
}