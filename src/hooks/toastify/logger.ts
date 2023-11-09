import { toast } from "react-toastify"

const error = (content: any) => {
    console.log(`[Error] ${content}`)
    toast.error(content)
}
const debug = (content: any) => {
    console.log(`[Debug] ${content}`)
    toast(content)
}

export default { error, debug }
