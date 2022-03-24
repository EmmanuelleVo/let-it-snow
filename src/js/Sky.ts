import {settings} from "./settings";

export class Canvas {
    private readonly canvasElt: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private gradient: string | CanvasGradient | CanvasPattern;
    private mouse: { oldX: number, newX: number }

    constructor(canvasElt: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: { oldX: number, newX: number }) {
        this.canvasElt = canvasElt
        this.ctx = ctx

        this.canvasElt.width = window.innerWidth;
        this.canvasElt.height = window.innerHeight;

        this.mouse = mouse
        this.resizeCanvas();
        this.generateGradient()
        this.addEventListeners();

        this.draw()

        return this
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });

        window.addEventListener('mousemove', (e: MouseEvent) => {
            if(this.mouse.newX !== e.x) {
                this.mouse = {
                    oldX: this.mouse.newX,
                    newX: e.x
                }
            }
            //console.log(this.mouse)
        });
    }

    resizeCanvas() {
        this.canvasElt.width = window.innerWidth;
        this.canvasElt.height = window.innerHeight;
    }

    generateGradient() {
        this.gradient = this.ctx.createLinearGradient(this.canvasElt.width / 2, 0, this.canvasElt.width / 2, this.canvasElt.height)
        this.gradient.addColorStop(0, settings.sky.gradient[0]);
        this.gradient.addColorStop(1, settings.sky.gradient[1]);

        return this
    }

    draw() {
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.canvasElt.width, this.canvasElt.height);

        return this
    }

}