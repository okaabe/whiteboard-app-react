import ToastHookProvider from "./hooks/toastify/toast";
import Board from "./components/board";
import PencilTool from "./components/tools/pencilTool"

const App = () => {
  return (
    <ToastHookProvider>
      <Board />
      {/* <PencilTool /> */}
    </ToastHookProvider>
  )
}

export default App
