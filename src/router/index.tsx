import { Header } from "@/components"
import { ContextProvider } from "@/context"
import { DashBoard, Homepage, Login, Signup } from "@/pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Routers = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/entrar" element={<Login />} />
                    <Route path="/cadastro" element={<Signup />} />
                    <Route path="/painel/*" element={<DashBoard />} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    )
}