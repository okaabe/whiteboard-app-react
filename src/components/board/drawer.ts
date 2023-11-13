import roughJS from "roughjs"

import {
    ElementShape,
    LineShape,
    PenShape,
} from "./types"

export const drawLine = (
    canvasElement: HTMLCanvasElement,
    element: LineShape
) => {
    const rough = roughJS.canvas(canvasElement)

    rough.draw(element.drawable)
}

export const drawPen = (
    ctx: CanvasRenderingContext2D,
    element: PenShape
) => {
    ctx.lineTo(element.positionX, element.positionY)
    ctx.stroke()
}

export const drawElement = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    element: ElementShape
) => {
    switch (element.type) {
        case "line":
            drawLine(canvas, element)
            break
        case "pen":
            drawPen(ctx, element)
    }
}