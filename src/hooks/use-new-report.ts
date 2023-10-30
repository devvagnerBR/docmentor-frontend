import { z } from 'zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { NewReport, NewReportWithStudentId } from '@/types/report-interface'
import { studentRequests } from '@/requests'
import { useMutation } from 'react-query'
import { queryClient } from '@/services'
import { useModalContext } from '@/context/modal-context'

const formNewReportValidate = z.object( {
    report: z.string(),
    title: z.string(),
} )

export const useNewReport = ( studentId: string ) => {

    const navigate = useNavigate();
    const { newReport } = studentRequests();
    const { newReport: modal } = useModalContext()

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<NewReport>( {
        resolver: zodResolver( formNewReportValidate )
    } );



    const currentValue = getValues()

    const { mutateAsync: createNewReport } = useMutation( newReport, {

        onSuccess: async () => {
            await queryClient.invalidateQueries( ["student", studentId] )
            await queryClient.invalidateQueries( "reports" )
            await queryClient.invalidateQueries( "report" )
            navigate( `/painel/alunos/${studentId}` )
            modal.setState( false )

        },

    } )
    const onSubmit = async ( event: React.FormEvent, student_id: string ) => {

        event.preventDefault();

        handleSubmit( async ( data ) => {
            try {

                const body: NewReportWithStudentId = {
                    ...data,
                    student_id
                }

                await createNewReport( body )

            } catch ( error: any ) {
                throw new Error( error.message );
            }
        } )( event );
    }
    return {
        register,
        handleSubmit,
        errors,
        setValue,
        getValues,
        currentValue,
        onSubmit
    }

}
