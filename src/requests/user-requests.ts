import { useUserContext } from "@/context"
import { getCookie } from "@/services"
import { docmentorAPI } from "@/services"
import { userQuery } from "./react-query/user-query"

export const userRequests = () => {

    const token = getCookie( "token" )
    const { setIsLogged } = useUserContext()
    const { logOutMutate, getUserById } = userQuery()


    const login = async ( { email, password }: { email: string, password: string } ) => {

        try {
            const res = await docmentorAPI.post( "/login", { email, password } )
            setIsLogged( true )
            return res.data.token

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }

    const signup = async ( { name, username, email, password }: { name: string, username: string, email: string, password: string } ) => {

        try {
            const res = await docmentorAPI.post( "/signup", { name, username, email, password } )
            setIsLogged( true )
            return res.data.token
        } catch ( error: any ) {
            throw new Error( error.response.data )
        }
    }

    const getStudents = async ( search?: string ) => {

        try {
            const res = await docmentorAPI.get(
                `/students/search?name=${search}`,
                { headers: { Authorization: token } }
            )
            return res.data

        } catch ( error ) {
            console.log( error );
        }
    }

    const logOut = () => {
        logOutMutate.mutate()
    }





    return {
        login,
        signup,
        getUserById,
        logOut,
        getStudents
    }
}