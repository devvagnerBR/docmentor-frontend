import { useUserContext } from "@/context"
import { getCookie } from "@/services"
import { docmentorAPI } from "@/services"
import { UserInterface } from "@/types/user-interface"

export const userRequests = () => {

    const token = getCookie( "token" )
    const { setIsLogged } = useUserContext()


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

    const getUserById = async (): Promise<UserInterface> => {

        try {
            const res = await docmentorAPI.get( `/profile`, { headers: { Authorization: token } } )
            return res.data.user as UserInterface;

        } catch ( error: any ) {
            throw new Error( error.response.data )
        }

    }

    return {
        login,
        signup,
        getUserById
    }
}