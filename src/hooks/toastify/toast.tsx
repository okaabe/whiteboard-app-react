import { ToastContainer } from "react-toastify"
import { Props } from "../../util/types"

import 'react-toastify/dist/ReactToastify.css';

const ToastHookProvider = ({ children }: Props) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}

export default ToastHookProvider