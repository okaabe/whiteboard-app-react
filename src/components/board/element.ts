import roughJS from "roughjs"

import {
    ElementShape, LineShape, PenShape
} from "./types"

const roughGenerator = roughJS.generator()

export const newLineShape = (
    props: Omit<LineShape, "drawable">
): ElementShape => {
    return {
        type: "line",
        drawable: roughGenerator.line(
            props.positionXStart,
            props.positionYStart,
            props.positionXEnd,
            props.positionYEnd
        ),
        ...props,
    }
}

export const newPenShape = (
    props: PenShape
): ElementShape => {
    return {
        type: "pen",
        ...props,
    }
}
