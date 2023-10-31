import { SidebarMenu } from "@/components"
import { useAuth } from "@/hooks"
import { Routes, Route } from 'react-router-dom';
import { DashboardStudents } from "..";
import { StudentDetails } from "./students/student-details";
import { useFreezeScreen } from "@/utils";
import { useModalContext } from "@/context/modal-context";


export const DashBoard = () => {

    useAuth()
    const {
        newReport,
        updateParent,
        updateStudent,
        deleteStudent,
        newParent
    } = useModalContext()

    const freezeScreen = newReport.state || updateParent.state || updateStudent.state || deleteStudent.state || newParent.state
    useFreezeScreen( freezeScreen )

    return (
        <div className=" max-w-[1920px] w-full flex ">
            <SidebarMenu />
            <div className="flex max-sm:pl-2 pl-24 w-full  max-sm:pr-2 pr-4">
                <Routes>
                    <Route path="alunos" element={<DashboardStudents />} />
                    <Route path="alunos/:studentId" element={<StudentDetails />} />
                </Routes>
            </div>
        </div>
    )
}