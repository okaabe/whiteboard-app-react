import { useEffect, useState } from "react"
import { ToolHandlingParams } from "../types"
import { newLineShape } from "../../element"
import logger from "../../../../hooks/toastify/logger"

export const handleOnMouseDownEvent = ({
    setDrawing,
    setElements,
    event,
}: ToolHandlingParams) => {
    setDrawing(true)

    setElements((state) => {
        return [...state, newLineShape({
            positionXStart: event.clientX,
            positionXEnd: event.clientX,
            positionYStart: event.clientY,
            positionYEnd: event.clientY,
        })]
    })
}

export const handleOnMouseMove = ({
    event,
    elements,
    setElements,
    isDrawing,
    setDrawing
}: ToolHandlingParams) => {
    if (!isDrawing) {
        return
    }

    const target = elements[elements.length - 1]
    const copied = [...elements]

    if (target.type !== "line") return logger.error(`The pointer of the element isnt known`)
    
    copied[copied.length - 1] = newLineShape({
        positionXStart: target.positionXStart,
        positionYStart: target.positionYStart,

        positionXEnd: event.clientX,
        positionYEnd: event.clientY
    })

    setElements(copied)
}

export const handleOnMouseUp = ({ setDrawing, elements, event, setElements }: ToolHandlingParams) => {
    setDrawing(false)
}