import {Canvas} from "./Sky";
import {Animation} from "./Animation";
import {Snowflake} from "./Snowflake";

class Main {
    private readonly canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private canvas: Canvas
    private animation: Animation
    private snowflakes :any[] = []
    private mouse: { oldX: number, newX: number }

    constructor() {
        this.canvasElt = document.getElementById("my-canvas") as HTMLCanvasElement;
        this.ctx = this.canvasElt.getContext("2d");
        this.snowflakes = []

        this.mouse = { oldX: this.canvasElt.width/2, newX: this.canvasElt.width }
        this.canvas = new Canvas(this.canvasElt, this.ctx, this.mouse);
        this.animation = new Animation(this.canvasElt, this.canvas, this.ctx, this.snowflakes, this.mouse);


    }
}

new Main();