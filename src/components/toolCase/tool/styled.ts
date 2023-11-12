import styled from "styled-components"

import { ToolBoxStyledProperties } from "./types"

export const SELECTED_TOOLBOX_BACKGROUND = "#CCCCCC"
export const UNSELECTED_TOOLBOX_BACKGROUND = "#F5F5F5"

const ToolBox = styled.div<ToolBoxStyledProperties>`
    width: 100%;
    height: 50px;

    /* margin-left: 10px; */
    padding: 5px;

    background-color: ${UNSELECTED_TOOLBOX_BACKGROUND};

    ${(properties) => {
        return properties.isSelected ?
            `border: solid 0.5px #000000;` :
            ""
    }}

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    transition: border .2s, background-color .1s;

    &:hover {
        border: solid 0.5px #000000;
    }
`

export {
    ToolBox
}
