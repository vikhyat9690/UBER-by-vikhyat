import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserSignup from "./pages/UserSignup"
import UserLogin from "./pages/UserLogin"
import CaptainSignup from "./pages/CaptainSignup"
import CaptainLogin from "./pages/CaptainLogin"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App
