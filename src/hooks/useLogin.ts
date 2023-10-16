import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from "react-query"
import { userRequests } from '@/requests'
import { queryClient, setCookie } from '@/services'
import { useNavigate } from 'react-router-dom';

export type LoginFormData = {
    email: string
    password: string
}

const formLoginValidade = z.object( {
    email: z.string().nonempty( "Campo obrigatório" ).email( "Email inválido" ),
    password: z.string().nonempty( "Campo obrigatório" )
} )



export const useLogin = () => {

    const navigate = useNavigate()
    const user = userRequests();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<LoginFormData>( { resolver: zodResolver( formLoginValidade ) } );

    const { mutateAsync, isLoading, error, } = useMutation( user.login, {
        onSuccess: ( data ) => {
            setCookie( "token", data )
            queryClient.invalidateQueries( ["user"] )
            navigate( "/painel" )

        },
        onError: ( error: any ) => {
            console.log( error.message );
        }
    } )

    const onSubmit = handleSubmit( async ( data ) => {

        try {
            await mutateAsync( data )

        } catch ( error: any ) {
            throw new Error( error.message )
        }
    } )
    return {
        register,
        setValue,
        errors,
        onSubmit,
        isLoading,
        error
    }
}
