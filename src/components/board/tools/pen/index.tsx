import { newPenShape } from "../../element";
import { ToolHandlingParams } from "../types";

const MOUSE_POSITION = {
    positionX: 0,
    positionY: 0,
}

export const handleOnMouseDown = ({
    event,
    setDrawing
}: ToolHandlingParams) => {
    setDrawing(true)

    MOUSE_POSITION.positionX = event.clientX
    MOUSE_POSITION.positionY = event.clientY
}

export const handleOnMouseMove = ({
    isDrawing,
    setElements,
    contextRef,
    event
}: ToolHandlingParams) => {
    if (!isDrawing) {
        return
    }

    setElements((state) => {
        return [...state, newPenShape(MOUSE_POSITION)]
    })

    contextRef.current?.moveTo(MOUSE_POSITION.positionX, MOUSE_POSITION.positionY)

    MOUSE_POSITION.positionX = event.clientX
    MOUSE_POSITION.positionY = event.clientY
}

export const handleOnMouseUp = ({
    setDrawing
}: ToolHandlingParams) => {
    setDrawing(false)
}