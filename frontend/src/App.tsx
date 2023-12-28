import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import LoginPage from "./pages/LoginPage"

import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
                <Route path="login" element={<LoginPage />} />
                
                <Route path="register" element={<RegisterPage />} />

                <Route index element={<HomePage />} />


            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
