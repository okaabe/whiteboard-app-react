import { SetState } from "../../../util/types"
import { ToolType } from "../../board/types"

export type ToolBoxProperties = {
    name: ToolType

    toolTypeSelected: ToolType
    setToolType: SetState<ToolType>
}

export type ToolBoxStyledProperties = {
    isSelected: boolean
}