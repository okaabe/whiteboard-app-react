import ToastHookProvider from "./hooks/toastify/toast";
import Board from "./components/board";

const App = () => {
  return (
    <ToastHookProvider>
      <Board />
    </ToastHookProvider>
  )
}

export default App
