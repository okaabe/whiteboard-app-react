import { MutableRefObject } from "react"
import { SetState, MouseEventProperties } from "../../../util/types"
import { ElementShape } from "../types"

export type ToolHandlingParams = {
    event: MouseEventProperties

    contextRef: MutableRefObject<CanvasRenderingContext2D | null | undefined>
    
    isDrawing: boolean
    setDrawing: SetState<boolean>

    elements: ElementShape[]
    setElements: SetState<ElementShape[]>
}