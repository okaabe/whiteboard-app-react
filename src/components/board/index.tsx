import React from "react"

import ToolCase from "../toolCase"

import { ElementShape, ToolType } from  "./types"
import { drawElement } from "./drawer"

import * as tools from "./tools"
import logger from "../../hooks/toastify/logger"

const Board = () => {
    const [toolType, setToolType] = React.useState<ToolType>("line")
    const [elements, setElements] = React.useState<ElementShape[]>([])
    const [isDrawing, setDrawing] = React.useState<boolean>(false)

    const canvasCTXReference = React.useRef<CanvasRenderingContext2D | null | undefined>(null)

    React.useEffect(() => {
        const canvasHTMLElement: any = document.getElementById("whiteboard_canvas")
        const ctx: CanvasRenderingContext2D | null | undefined = canvasHTMLElement.getContext("2d")

        if (!ctx) {
            return logger.error(`Canvas not supported`)
        }

        ctx?.clearRect(
            0, 0,
            canvasHTMLElement.width,
            canvasHTMLElement.height
        )

        canvasCTXReference.current = ctx

        elements.forEach((element) => {
            drawElement(
                canvasHTMLElement,
                canvasCTXReference.current as CanvasRenderingContext2D,
                element
            )
        })
    }, [elements])

    return (
        <>
            <canvas 
                id="whiteboard_canvas"
                width={window.innerWidth}
                height={window.innerHeight}
                
                onMouseDown={(event) => tools.handleOnMouseDown(toolType, {
                    elements,
                    event,
                    isDrawing,
                    setDrawing,
                    setElements,
                    contextRef: canvasCTXReference
                })}

                onMouseUp={(event) => tools.handleOnMouseUp(toolType, {
                    elements,
                    event,
                    isDrawing,
                    setDrawing,
                    setElements,
                    contextRef: canvasCTXReference
                })}

                onMouseMove={(event) => tools.handleOnMouseMove(toolType, {
                    elements,
                    event,
                    isDrawing,
                    setDrawing,
                    setElements,
                    contextRef: canvasCTXReference
                })}
            />
            <ToolCase 
                setToolType={ setToolType }
                toolType={ toolType }
            />
        </>
    )
}

export default Board
