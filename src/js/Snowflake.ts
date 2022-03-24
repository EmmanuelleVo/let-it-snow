import {settings} from "./settings";

export class Snowflake {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private position: {x: number, y: number}
    private radius: number
    private opacity: number
    private rand: number
    private color: string
    private speed: {x: number, y: number}
    private randomNumber: number;
    private mouse: { oldX: number, newX: number }

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse: { oldX: number, newX: number }) {
        this.canvas = canvas
        this.ctx = ctx
        this.mouse = mouse
        //console.log(this.mouse)

        this.generate()
        return this
    }

    generate() {
        this.radius = settings.snowflake.radius.min + Math.random() * (settings.snowflake.radius.max - settings.snowflake.radius.min)
        this.position =  {
            x: Math.random() * this.canvas.width,
            y: -this.radius
        }
        this.color = 'white'
        this.opacity = settings.snowflake.opacity.min + Math.random() * (settings.snowflake.opacity.max - settings.snowflake.opacity.min)
        this.speed =  {
            x: settings.snowflake.speedX.min + Math.random() * (settings.snowflake.speedX.max - settings.snowflake.speedX.min),
            y: settings.snowflake.speedY.min + Math.random() * (settings.snowflake.speedY.max - settings.snowflake.speedY.min)
        }
    }

    random() {
        return this.rand = Math.random()
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.globalAlpha = this.opacity
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2)
        this.ctx.fill()
        this.ctx.closePath()
    }

    update() {
        this.draw()

        this.position.y += this.speed.y

        if(Math.sign(this.mouse.newX - this.mouse.oldX) === 1) { // nombre positif - droite
            this.position.x += this.speed.x
        } else if(Math.sign(this.mouse.newX - this.mouse.oldX) === -1) { // négatif - gauche
            this.position.x -= this.speed.x
        }

        if(this.position.y >= this.canvas.height - this.radius) {
            this.speed.x = 0
            this.speed.y = 0

            this.randomNumber = this.random()
        }



    }
}