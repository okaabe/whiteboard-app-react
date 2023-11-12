import {
    ToolCaseContainer
} from "./styled"
import { ToolCaseProperties } from "./types"

import Tool from "./tool"

const ToolCase = (props: ToolCaseProperties) => {

    return (
        <ToolCaseContainer>
            <Tool
                name="line"
                toolTypeSelected={props.toolType}
                setToolType={props.setToolType}
            />
            <Tool
                name="pen"
                toolTypeSelected={props.toolType}
                setToolType={props.setToolType}
            />
            <Tool
                name="rectangle"
                toolTypeSelected={props.toolType}
                setToolType={props.setToolType}
            />
        </ToolCaseContainer>
    )
}

export default ToolCase
