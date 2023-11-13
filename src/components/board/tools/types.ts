import { SetState } from "../../../util/types"
import { CanvasMouseEvent } from "../../tools/types"
import { ElementShape } from "../types"

export type ToolHandlingParams = {
    event: CanvasMouseEvent
    
    isDrawing: boolean
    setDrawing: SetState<boolean>

    elements: ElementShape[]
    setElements: SetState<ElementShape[]>
}