import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home"

function App() {


  return (
    <BrowserRouter>
      <ToastContainer
        hideProgressBar
        autoClose={3000}
        newestOnTop={true}
        pauseOnFocusLoss={false}
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
