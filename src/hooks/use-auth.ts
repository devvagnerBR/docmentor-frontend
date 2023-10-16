import { useUserContext } from "@/context";
import { getCookie } from "@/services"
import React from "react";
import { useNavigate } from "react-router-dom"

export const useAuth = () => {

    const { isLogged } = useUserContext()

    const navigate = useNavigate();
    const token = getCookie( "token" );

    React.useEffect( () => {
        if ( !isLogged && !token ) navigate( "/entrar" )
    }, [token, isLogged, navigate] )
}