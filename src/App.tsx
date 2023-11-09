import PencilTool from "./components/tools/pencilTool";
import DrawingTool from "./components/tools/drawingTool";
import ToastHookProvider from "./hooks/toastify/toast";

const App = () => {
  return (
    <ToastHookProvider>
      {/* <DrawingTool /> */}
      <PencilTool />
    </ToastHookProvider>
  )
}

export default App
