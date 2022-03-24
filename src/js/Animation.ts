import { Canvas } from "./Sky"
import {Snowflake} from "./Snowflake";

export class Animation {
    private readonly canvasElt: HTMLCanvasElement
    private canvas: Canvas
    private ctx: CanvasRenderingContext2D
    private snowflakes:any[] = [];
    private mouse: { oldX: number, newX: number }

    constructor(canvasElt: HTMLCanvasElement, Canvas: Canvas, ctx: CanvasRenderingContext2D, snowflakes:any[] = [], mouse: { oldX: number, newX: number }) {
        this.canvas = Canvas
        this.canvasElt = canvasElt
        this.ctx = ctx
        this.snowflakes = snowflakes
        this.mouse = mouse

        this.animate()

        return this
    }

    animate() {
        //this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height)
        this.canvas.draw()
        //Canvas

        this.snowflakes.push(new Snowflake(this.canvasElt, this.ctx, this.mouse));

        this.snowflakes.forEach((snowflake: Snowflake) => {
            snowflake.update()

            if(snowflake.random() > 0.99) {
                this.snowflakes.splice(0, 1)
                //console.log(snowflake.random())
            }
        });



        requestAnimationFrame(() => {
            this.animate();
        });
    }
}