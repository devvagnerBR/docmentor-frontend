import { SidebarMenu } from "@/components"
import { useAuth } from "@/hooks"
import { Routes, Route } from 'react-router-dom';
import { DashboardStudents } from "..";


export const DashBoard = () => {

    useAuth()

    return (
        <div className="h-[calc(100vh-80px)] flex">
            <SidebarMenu />
            <div className="flex pl-4">
                <Routes>
                    <Route path="/" element={<DashboardStudents />} />
                </Routes>
            </div>
        </div>
    )
}