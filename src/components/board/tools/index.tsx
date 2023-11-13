import { ToolType } from "../types";
import { ToolHandlingParams } from "./types";

import * as line from "./line"
import logger from "../../../hooks/toastify/logger";

export const handleOnMouseDown = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseDownEvent(params)

        default:
            logger.error(`${toolType} wasnt implemented yet`)
    }
}


export const handleOnMouseMove = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseMove(params)

        default:
            logger.error(`${toolType} wasnt implemented yet`)
    }
}

export const handleOnMouseUp = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseUp(params)

        default:
            logger.error(`${toolType} wasnt implemented yet`)
    }
}