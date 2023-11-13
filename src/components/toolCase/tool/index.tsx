import React from "react"

import {
    ToolBox
} from "./styled"
import { ToolBoxProperties } from "./types"
import { ToolType } from "../../board/types"

export const isToolSelected = (name: ToolType, selectedTool: ToolType): boolean => {
    return name === selectedTool
}

const Tool = (properties: ToolBoxProperties) => {
    const handleOnMouseClick = () => {
        properties.setToolType(properties.name)
    }

    return (
        <ToolBox
            isselected={isToolSelected(properties.name, properties.toolTypeSelected)}
            onClick={handleOnMouseClick}
        >
            {properties.name}
        </ToolBox>
    )
}

export default Tool
