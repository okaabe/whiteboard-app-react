import { Drawable } from "roughjs/bin/core"

export type ToolType = "line" | "pen" | "rectangle"

export type PenShape = {
    positionX: number
    positionY: number
}

export type LineShape = {
    positionXStart: number
    positionXEnd: number

    positionYStart: number
    positionYEnd: number

    drawable: Drawable
}

export type ElementShape = 
    | { type: "line" } & LineShape
    | { type: "pen" } & PenShape
    | { type: "rectangle" }
