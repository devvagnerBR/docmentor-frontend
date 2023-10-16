import { ContextProvider } from "@/context"
import { Homepage, Login, Signup } from "@/pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Routers = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/entrar" element={<Login />} />
                    <Route path="/cadastro" element={<Signup />} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}