import {
    useEffect,
    useState,
    useRef
} from "react"
import { Position } from "./types"
import { CanvasMouseEvent } from "../types"

const MOUSE_POSITION = { x: 0, y: 0 }

const PencilTool = () => {
    const [points, setPoints] = useState<Position[]>([])
    const [isDrawing, setIsDrawing] = useState<boolean>(false)

    const contextRef = useRef<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        const canvas: any = document.getElementById("paint_tool")
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.lineCap = "round"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2

        contextRef.current = ctx

        // console.log(points)

        points.forEach((point) => {
            contextRef.current?.lineTo(point.x, point.y)
            contextRef.current?.stroke()
        })
    }, [points])

    const handleOnMouseDown = (event: CanvasMouseEvent) => {
        setIsDrawing(true)

        MOUSE_POSITION.x = event.clientX
        MOUSE_POSITION.y = event.clientY
    }

    const handleOnMouseUp = () => setIsDrawing(false)
    const handleOnMouseMove = (event: CanvasMouseEvent) => {
        if (!isDrawing) return

        // console.log(MOUSE_POSITION)
        setPoints((state) => {
            return [...state, MOUSE_POSITION]
        })

        console.log(points[points.length -1])
        contextRef.current?.moveTo(MOUSE_POSITION.x, MOUSE_POSITION.y)

        MOUSE_POSITION.x = event.clientX
        MOUSE_POSITION.y = event.clientY
    }

    return (
        <canvas 
            id="paint_tool"
            width={window.innerWidth}
            height={window.innerHeight}

            onMouseDown={handleOnMouseDown}
            onMouseUp={handleOnMouseUp}
            onMouseMove={handleOnMouseMove}
        />
    )
}

export default PencilTool
