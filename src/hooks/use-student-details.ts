import { studentRequests } from "@/requests"
import { queryClient } from "@/services"
import { StudentDetailsInterface } from "@/types/student-details-interface"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

export const useStudentDetails = ( studentId: string ) => {


    const request = studentRequests()
    const navigate = useNavigate()

    const { data: student, isLoading } = useQuery<StudentDetailsInterface>(

        ["student", studentId],
        () => request.getStudentById( studentId! ),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 1 minuto
        }
    )


    const { mutateAsync: deleteStudent } = useMutation(
        () => request.deleteStudent( studentId ),
        {
            onSuccess: () => {
                queryClient.invalidateQueries( "students" )
                queryClient.invalidateQueries( "student" )
                navigate( `/painel/alunos` )
            },
        }
    )


    return {
        student,
        deleteStudent
    }
}