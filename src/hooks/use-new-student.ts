import { useModalContext } from '@/context/modal-context'
import { studentRequests } from '@/requests'
import { queryClient } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { z } from 'zod'

export enum ServiceDays {
    SEGUNDA_FEIRA = "SEGUNDA_FEIRA",
    TERCA_FEIRA = "TERCA_FEIRA",
    QUARTA_FEIRA = "QUARTA_FEIRA",
    QUINTA_FEIRA = "QUINTA_FEIRA",
    SEXTA_FEIRA = "SEXTA_FEIRA",
}

export type NewStudentFormData = {
    name: string
    birthday: string
    school_year: string
    service_days: ServiceDays[]
    school_id: string
}

const formNewStudentValidate = z.object( {
    name: z.string().nonempty( "Campo obrigatório" ),
    birthday: z.string().nonempty( "Campo obrigatório" ),
    school_year: z.string().nonempty( "Campo obrigatório" ),
    service_days: z.array( z.string() ).nonempty( "Campo obrigatório" ),
    school_id: z.string().nonempty( "Campo obrigatório" ),
} )


export const useNewStudent = () => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<NewStudentFormData>( { resolver: zodResolver( formNewStudentValidate ) } );
    const student = studentRequests()
    const { newStudent } = useModalContext()

    const { mutateAsync: addNewStudent } = useMutation( student.addNewStudent, {
        onSuccess: () => {
            queryClient.invalidateQueries( "students" )
            queryClient.invalidateQueries( "schools" )
            newStudent.setState( false )
        },
        onError: ( error: any ) => {
            console.log( error.message )
        }
    } )


    const onSubmit = handleSubmit( async ( data ) => {

        try {
            await addNewStudent( data )
        } catch ( error: any ) {
            throw new Error( error.message )
        }
    } )


    return {
        register,
        onSubmit
    }
}
