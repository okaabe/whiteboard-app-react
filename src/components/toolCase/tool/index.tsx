import React from "react"

import {
    ToolBox
} from "./styled"
import { ToolBoxProperties } from "./types"
import { ToolType } from "../../board/types"

export const isSelected = (name: ToolType, selectedTool: ToolType) => {
    return name === selectedTool
}

const Tool = (properties: ToolBoxProperties) => {
    const handleOnMouseClick = () => {
        properties.setToolType(properties.name)
    }

    return (
        <ToolBox
            isSelected={isSelected(properties.name, properties.toolTypeSelected)}
            onClick={handleOnMouseClick}
        >
            {properties.name}
        </ToolBox>
    )
}

export default Tool
