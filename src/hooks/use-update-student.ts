import { useModalContext } from '@/context/modal-context'
import { studentRequests, userRequests } from '@/requests'
import { queryClient } from '@/services'
import { momentJS } from '@/services/moment-js'
import { StudentDetailsInterface } from '@/types/student-details-interface'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

export enum ServiceDays {
    SEGUNDA_FEIRA = "SEGUNDA_FEIRA",
    TERCA_FEIRA = "TERCA_FEIRA",
    QUARTA_FEIRA = "QUARTA_FEIRA",
    QUINTA_FEIRA = "QUINTA_FEIRA",
    SEXTA_FEIRA = "SEXTA_FEIRA",
}

export type UpdateStudentFormData = {
    name?: string
    birthday?: string
    school_year?: string
    service_days?: ServiceDays[]
    studentId: string
}

const formUpdateStudentValidate = z.object( {
    name: z.string().optional(),
    birthday: z.string().optional(),
    school_year: z.string().optional(),
    service_days: z.array( z.string() ).optional()
} )

export const useUpdateStudent = ( studentId: string ) => {



    const navigate = useNavigate()
    const { updateStudent: studentModal } = useModalContext()
    const { getStudentById, updateStudent } = studentRequests()


    const { data: student } = useQuery<StudentDetailsInterface>(

        ["student", studentId],
        () => getStudentById( studentId ),
        {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
        }
    )

    const { register, handleSubmit, formState: { errors }, setValue, getValues, control, watch } = useForm<UpdateStudentFormData>( {
        resolver: zodResolver( formUpdateStudentValidate ), defaultValues: {
            service_days: student?.service_days as ServiceDays[],
        }
    } );


    React.useEffect( () => {
        if ( student ) {
            if ( student.name ) setValue( 'name', student.name )
            if ( student.birthday ) setValue( 'birthday', momentJS.utc( Number( student.birthday ) ).format( 'YYYY-MM-DD' ) )
            if ( student.school_grade ) setValue( 'school_year', student.school_grade )
        }

    }, [studentId, student] )

    const currentValue = getValues()

    const mutate = useMutation( updateStudent, {
        onSuccess: async () => {
            await queryClient.invalidateQueries( "students" )
            await queryClient.invalidateQueries( "student" )
            studentModal.setState( false )

        },
        onError: ( error: any ) => {
            console.log( error.message )
        }
    } )

    const onSubmit = async ( event: React.FormEvent, studentId: string ) => {
        event.preventDefault();

        handleSubmit( async ( data ) => {

            try {
                const body = {
                    name: data.name === student?.name ? undefined : data.name,
                    birthday: data.birthday === student?.birthday ? undefined : data.birthday,
                    school_year: data.school_year === student?.school_grade ? undefined : data.school_year,
                    service_days: data.service_days === student?.service_days ? undefined : data.service_days,
                }
                console.log( { ...body, studentId } )
                await mutate.mutateAsync( { ...body, studentId } )

            } catch ( error: any ) {
                throw new Error( error.message );
            }
        } )( event );
    };

    return {
        student,
        register,
        errors,
        onSubmit,
        getValues,
        control,
        watch,
        setValue,
        currentValue
    }
}
