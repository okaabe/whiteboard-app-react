import React from "react"

import ToolCase from "../toolCase"

import { ToolType } from  "./types"
import logger from "../../hooks/toastify/logger"

const Board = () => {
    const [toolType, setToolType] = React.useState<ToolType>("pen")
    
    

    return (
        <>
            <canvas 
                id="whiteboard_canvas"
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <ToolCase 
                setToolType={ setToolType }
                toolType={ toolType }
            />
        </>
    )
}

export default Board
