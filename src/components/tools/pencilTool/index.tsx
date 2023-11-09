//@ts-nocheck
import { useEffect, useState, useRef } from "react"
import { Point, Points } from "./types"
import { CanvasMouseEvent } from "../types"
import logger from "../../../hooks/toastify/logger"

const MOUSE_POSITION = [0, 0]

const makePoint = (positionX: number, positionY: number): Point => {
    return {
        positionX,
        positionY
    }
}

const PencilTool = () => {
    const [pointsOnScreen, setPointsOnScreen] = useState<Points>([])
    const [isDrawingAtTheMoment, setIsDrawingAtTheMoment] = useState<boolean>(false)
    const canvasContextReference = useRef<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        const canvas: any = document.getElementById("pencil_tool")
        const canvas2DContext: CanvasRenderingContext2D = canvas.getContext("2d")
        
        canvasContextReference.current = canvas2DContext

        canvas2DContext.clearRect(0, 0, canvas.width, canvas.height)
        canvas2DContext.lineCap = "round"
        canvas2DContext.strokeStyle = "black"
        canvas2DContext.lineWidth = 2

        pointsOnScreen.forEach((pointOnScreen) => {
            canvas2DContext.lineTo(pointOnScreen.positionX, pointOnScreen.positionY)
            canvas2DContext.stroke()
        })
    }, [pointsOnScreen])

    const handleOnMouseDown = (event: CanvasMouseEvent) => {
        setIsDrawingAtTheMoment(true)

        MOUSE_POSITION[0] = event.clientX
        MOUSE_POSITION[1] = event.clientY
    }

    const handleOnMouseUp = (event: CanvasMouseEvent) => {
        setIsDrawingAtTheMoment(false)
    }

    const handleOnMouseMove = (event: CanvasMouseEvent) => {
        if (!isDrawingAtTheMoment) return;

        setPointsOnScreen((state) => [...state, {
            positionX: MOUSE_POSITION[0],
            positionY: MOUSE_POSITION[1]
        }]);
        canvasContextReference.current.moveTo(MOUSE_POSITION[0], MOUSE_POSITION[1]);

        const { clientX, clientY } = event;
        MOUSE_POSITION[0] = clientX;
        MOUSE_POSITION[1] = clientY;
    }

    return (
        <canvas 
            id="pencil_tool"
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onMouseMove={handleOnMouseMove}
        />
    )
}

export default PencilTool