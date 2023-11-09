import { Drawable } from "roughjs/bin/core"

export type CanvasMouseEvent = {
    clientX: number
    clientY: number
}

export type Element = {
    positionXStart: number
    positionXEnd: number

    drawableObject: Drawable

    positionYStart: number
    positionYEnd: number
}

export type Elements = Element[]
