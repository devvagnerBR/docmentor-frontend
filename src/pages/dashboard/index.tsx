import { SidebarMenu } from "@/components"
import { useAuth } from "@/hooks"
import { Routes, Route } from 'react-router-dom';
import { DashboardStudents } from "..";


export const DashBoard = () => {

    useAuth()

    return (
        <div className="h-[calc(100vh-80px)] flex bg-green-400">
            <SidebarMenu />
            <Routes>
                <Route path="/" element={<DashboardStudents />} />
            </Routes>
        </div>
    )
}