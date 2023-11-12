import { Dispatch, ReactNode, SetStateAction } from "react"

export type Props = {
    children: ReactNode
}

export type SetState <StateType> = Dispatch<SetStateAction<StateType>>
