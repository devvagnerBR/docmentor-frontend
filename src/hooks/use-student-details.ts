import { studentRequests } from "@/requests"
import { StudentDetailsInterface } from "@/types/student-details-interface"
import { useQuery } from "react-query"

export const useStudentDetails = ( studentId: string ) => {


    const request = studentRequests()

    const { data: student, isLoading } = useQuery<StudentDetailsInterface>(

        ["student", studentId],
        () => request.getStudentById( studentId! ),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 1 minuto
        }
    )

    return { student }
}