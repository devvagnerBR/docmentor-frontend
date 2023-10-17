import { docmentorAPI, getCookie } from "@/services"

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


    return {
        getStudentById
    }
}