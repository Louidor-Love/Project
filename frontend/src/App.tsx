import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
                
                <Route path="register" element={<RegisterPage />} />

                <Route index element={<HomePage />} />


            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
