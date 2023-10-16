import { useUserContext } from "@/context"
import { getCookie } from "@/services"
import { docmentorAPI } from "@/services"

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
    return { login }
}