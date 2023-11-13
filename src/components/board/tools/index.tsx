import { ToolType } from "../types";
import { ToolHandlingParams } from "./types";

import * as line from "./line"
import * as pen from "./pen"

import logger from "../../../hooks/toastify/logger";

export const handleOnMouseDown = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseDownEvent(params)

        case "pen":
            return pen.handleOnMouseDown(params)

        default:
            logger.error(`${toolType} wasnt implemented yet`)
    }
}


export const handleOnMouseMove = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseMove(params)

        case "pen":
            return pen.handleOnMouseMove(params)
    }
}

export const handleOnMouseUp = (toolType: ToolType, params: ToolHandlingParams) => {
    switch (toolType) {
        case "line":
            return line.handleOnMouseUp(params)

        case "pen":
            return pen.handleOnMouseUp(params)
    }
}