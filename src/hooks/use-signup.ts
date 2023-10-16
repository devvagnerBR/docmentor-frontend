import React from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { userRequests } from '@/requests';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { useMutation } from 'react-query';
import { setCookie } from '@/services';


export type SignupFormData = {
    name: string
    username: string
    email: string
    password: string

}

const formSignupValidate = z.object( {
    email: z.string().nonempty( "Campo obrigatório" ).email( "Email inválido" ),
    name: z.string().nonempty( "Campo obrigatório" ),
    username: z.string().nonempty( "Campo obrigatório" ).min( 3, "nome de usuário precisa ser igual ou maior que 3 caracteres" ),
    password: z.string().nonempty( "Campo obrigatório" ).min( 6, "senha precisa ter  maior que 6 caracteres" ).regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/, "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número" ),
} )


export const useSignup = () => {

    const navigate = useNavigate();
    const user = userRequests()

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<SignupFormData>( { resolver: zodResolver( formSignupValidate ) } );


    const { mutateAsync, isLoading, error, } = useMutation( user.signup, {
        onSuccess: ( data ) => {
            setCookie( "token", data )
            navigate( "/painel" )
        },
        onError: ( error: any ) => {
            console.log( error.message );
        }
    } )

    const onSubmit = handleSubmit( async ( data ) => {

        try {
            await mutateAsync( data );

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
