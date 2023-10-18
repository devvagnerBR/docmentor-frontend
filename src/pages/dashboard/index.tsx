import { SidebarMenu } from "@/components"
import { useAuth } from "@/hooks"
import { Routes, Route } from 'react-router-dom';
import { DashboardStudents } from "..";
import { StudentDetails } from "./students/student-details";


export const DashBoard = () => {

    useAuth()

    return (
        <div className="h-[calc(100vh-80px)] max-w-[1920px] w-screen  flex">
            <SidebarMenu />
            <div className="flex max-sm:pl-2 pl-24 w-full max-sm:pr-2 pr-4">
                <Routes>
                    <Route path="alunos" element={<DashboardStudents />} />
                    <Route path="alunos/:studentId" element={<StudentDetails />} />
                </Routes>
            </div>
        </div>
    )
}