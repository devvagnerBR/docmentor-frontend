import { ServiceDays, UpdateStudentFormData } from "@/hooks/use-update-student"
import { docmentorAPI, getCookie } from "@/services"
import { NewReportWithStudentId } from "@/types/report-interface"


export type NewStudentFormData = {
    name: string
    birthday: string
    school_year: string
    service_days: ServiceDays[]
    school_id: string
}

export const studentRequests = () => {


    const token = getCookie( "token" )


    const getStudentById = async ( studentId: string ) => {

        try {

            const res = await docmentorAPI.get( `/student/${studentId}`, { headers: { Authorization: token } } )
            return res.data

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }

    const updateStudent = async ( data: UpdateStudentFormData ) => {

        try {

            const res = await docmentorAPI.put( `/update/${data.studentId}`,
                {
                    name: data.name || undefined,
                    birthday: String( new Date( data.birthday! ).getTime() ) || undefined,
                    school_year: data.school_year || undefined,
                    service_days: data.service_days || undefined
                },
                { headers: { Authorization: token } },

            )

            return res

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }

    }

    const newReport = async ( body: NewReportWithStudentId ) => {

        try {

            const res = await docmentorAPI.post( `/report/${body.student_id}`, body, { headers: { Authorization: token } } )
            return res

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }

    }

    const deleteStudent = async ( studentId: string ) => {

        try {

            const res = await docmentorAPI.delete( `/student/${studentId}`, { headers: { Authorization: token } } )
            return res

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }

    }

    const addNewStudent = async ( data: NewStudentFormData ) => {

        try {

            const res = await docmentorAPI.post( `register/${data.school_id}`,
                {
                    name: data.name,
                    birthday: String( new Date( data.birthday ).getTime() ),
                    school_year: data.school_year,
                    service_days: data.service_days,
                },
                {
                    headers: {
                        Authorization: token
                    }
                } );

            return res

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }

    }
    return {
        getStudentById,
        updateStudent,
        newReport,
        deleteStudent,
        addNewStudent
    }
}