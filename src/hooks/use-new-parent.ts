import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { parentRequests } from '@/requests';
import { queryClient } from '@/services';
import { useModalContext } from '@/context/modal-context';

export type NewParentFormData = {

    address: string
    mother_name?: string
    father_name?: string
    phone_number1: string
    phone_number2?: string

}
const formNewParentValidate = z.object( {
    address: z.string().nonempty( "Campo obrigatório" ),
    mother_name: z.string().optional(),
    father_name: z.string().optional(),
    phone_number1: z.string().nonempty( "Campo obrigatório" ),
    phone_number2: z.string().optional(),
} )


export const useNewParent = ( studentId: string ) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<NewParentFormData>( { resolver: zodResolver( formNewParentValidate ) } );
    const parent = parentRequests()
    const { newParent } = useModalContext()

    const { mutateAsync: registerParent } = useMutation( parent.registerParents, {
        onSuccess: async ( data ) => {
            await queryClient.invalidateQueries( ["student", studentId] )
            await queryClient.invalidateQueries( "parents" )
            await queryClient.invalidateQueries( "parent" )
            newParent.setState( false )
        },
        onError: ( error: any ) => {
            console.log( error.message );
        }
    } )


    const onSubmit = handleSubmit( async ( data ) => {

        try {
            console.log( data );
            await registerParent( { ...data, studentId } );
        } catch ( error: any ) {
            throw new Error( error.message )
        }
    } )



    return {
        register,
        setValue,
        errors,
        onSubmit
    }
}
