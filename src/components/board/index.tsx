import React from "react"

import ToolCase from "../toolCase"

import { ElementShape, ToolType } from  "./types"
import { drawElement } from "./drawer"
import { newLineShape } from "./element"

import * as tools from "./tools"

const Board = () => {
    const [toolType, setToolType] = React.useState<ToolType>("line")
    const [elements, setElements] = React.useState<ElementShape[]>([
        newLineShape({
            positionXEnd: 300,
            positionXStart: 20,
            positionYEnd: 200,
            positionYStart: 200,
        })
    ])
    const [isDrawing, setDrawing] = React.useState<boolean>(false)

    const canvasCTXReference = React.useRef<CanvasRenderingContext2D | null | undefined>(null)

    React.useEffect(() => {
        const canvasHTMLElement: any = document.getElementById("whiteboard_canvas")
        const ctx: CanvasRenderingContext2D | null | undefined = canvasHTMLElement.getContext("2d")

        canvasCTXReference.current = ctx

        ctx?.clearRect(
            0, 0,
            canvasHTMLElement.width,
            canvasHTMLElement.height
        )

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
