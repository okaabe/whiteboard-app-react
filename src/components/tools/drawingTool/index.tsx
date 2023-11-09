import { useEffect, useState } from "react";

import roughJS from "roughjs"
import logger from "../../../hooks/toastify/logger";

import {
    Elements,
    Element,
} from "./types";

import { CanvasMouseEvent } from "../types"

const rough = roughJS.generator()

const makeElement = (
    positionXStart: number,
    positionYStart: number,
    positionXEnd: number,
    positionYEnd: number
): Element => {
    const drawableObject = rough.line(
        positionXStart,
        positionYStart,
        positionXEnd,
        positionYEnd
    )

    return {
        positionXEnd,
        positionYEnd,
        positionXStart,
        positionYStart,
        drawableObject
    }
}

const DrawingTool = () => {
    const [elementsOnScreen, setElementsOnScreen] = useState<Elements>([])
    const [isDrawingAtTheMoment, setDrawingAtTheMoment] = useState<boolean>(false)

    useEffect(() => {
        const canvasHTMLElement: any = document.getElementById("canvas")

        if (!canvasHTMLElement) {
            logger.error("Couldnt detect a canvas element")
            return
        }

        const canvasContext: CanvasRenderingContext2D = canvasHTMLElement.getContext("2d")
        const roughDrawer = roughJS.canvas(canvasHTMLElement)

        canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight)

        elementsOnScreen.forEach((elementOnScreen) => {
            roughDrawer.draw(elementOnScreen.drawableObject)
        })
    }, [elementsOnScreen])

    const handleOnMouseDownEvent = (event: CanvasMouseEvent) => {
        setDrawingAtTheMoment(true)

        setElementsOnScreen((currentElementsOnScreen) => {
            return [...currentElementsOnScreen, makeElement(
                event.clientX,
                event.clientY,
                event.clientX,
                event.clientY
            )]
        })
    }

    const handleOnMouseMoveEvent = (event: CanvasMouseEvent) => {
        if (!isDrawingAtTheMoment) {
            return
        }

        const copiedElementsOnScreenArray = [...elementsOnScreen]
        const target = copiedElementsOnScreenArray[copiedElementsOnScreenArray.length - 1]

        const finishedElement = makeElement(
            target.positionXStart,
            target.positionYStart,
            event.clientX,
            event.clientY
        )

        copiedElementsOnScreenArray[copiedElementsOnScreenArray.length - 1] = finishedElement
        setElementsOnScreen(copiedElementsOnScreenArray)
    }

    const handleOnMouseUpEvent = (event: CanvasMouseEvent) => {
        setDrawingAtTheMoment(false)
    }

    return (
        <canvas 
            id="canvas"
            width={window.innerWidth}
            height={window.innerHeight}

            onMouseDown={handleOnMouseDownEvent}
            onMouseMove={handleOnMouseMoveEvent}
            onMouseUp={handleOnMouseUpEvent}
        />
    )
}

export default DrawingTool
