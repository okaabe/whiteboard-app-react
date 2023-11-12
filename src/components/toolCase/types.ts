import { SetState } from "../../util/types"
import { ToolType } from "../board/types"

export type ToolCaseProperties = {
    setToolType: SetState<ToolType>
    toolType: ToolType
}
