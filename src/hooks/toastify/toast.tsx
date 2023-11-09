import { ToastContainer, toast } from "react-toastify"
import { Props } from "../../util/reactTypes"

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