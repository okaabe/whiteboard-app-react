import DrawingTool from "./components/tools/drawingTool";
import ToastHookProvider from "./hooks/toastify/toast";

const App = () => {
  return (
    <ToastHookProvider>
      <DrawingTool />
    </ToastHookProvider>
  )
}

export default App
