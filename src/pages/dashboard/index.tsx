import { SidebarMenu } from "@/components"
import { useAuth } from "@/hooks"
import { Routes, Route } from 'react-router-dom';
import { DashboardStudents } from "..";


export const DashBoard = () => {

    useAuth()

    return (
        <div className="h-[calc(100vh-80px)] max-w-[1920px] w-screen flex">
            <SidebarMenu />
            <div className="flex  pl-24 w-full pr-4">
                <Routes>
                    <Route path="alunos" element={<DashboardStudents />} />
                </Routes>
            </div>
        </div>
    )
}