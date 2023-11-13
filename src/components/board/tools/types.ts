import { MutableRefObject } from "react"
import { SetState } from "../../../util/types"
import { CanvasMouseEvent } from "../../tools/types"
import { ElementShape } from "../types"

export type ToolHandlingParams = {
    event: CanvasMouseEvent

    contextRef: MutableRefObject<CanvasRenderingContext2D | null | undefined>
    
    isDrawing: boolean
    setDrawing: SetState<boolean>

    elements: ElementShape[]
    setElements: SetState<ElementShape[]>
}