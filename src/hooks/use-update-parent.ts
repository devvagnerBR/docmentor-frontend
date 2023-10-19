import { useModalContext } from '@/context/modal-context'
import { parentRequests } from '@/requests'
import { queryClient } from '@/services'
import { ParentsInterface } from '@/types/parent-interface'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formUpdateParentsValidate = z.object( {
    address: z.string().optional(),
    father_name: z.string().optional(),
    mother_name: z.string().optional(),
    phone_number1: z.string().optional(),
    phone_number2: z.string().optional(),
} )


export const useUpdateParent = ( studentId: string ) => {


    const navigate = useNavigate()
    const { updateParent: parentModal } = useModalContext()
    const { updateParents, getParentsByStudentId } = parentRequests()

    const { data: parents } = useQuery<ParentsInterface>(
        ["parents", studentId],
        () => getParentsByStudentId( studentId ),
        {
            enabled: !!studentId,
            refetchOnWindowFocus: false,
        } )

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<ParentsInterface>( {
        resolver: zodResolver( formUpdateParentsValidate ), defaultValues: {} as ParentsInterface
    } );

    const { mutateAsync: updateParent } = useMutation( updateParents, {
        onSuccess: async () => {
            await queryClient.invalidateQueries( ["student", studentId] )
            await queryClient.invalidateQueries( "parents" )
            await queryClient.invalidateQueries( "parent" )
            parentModal.setState( false )
        },
        onError: ( error: any ) => {
            console.log( error.message )
        }
    } )

    React.useEffect( () => {

        const setAsDefaultValues = () => {
            if ( parents ) {
                setValue( "address", parents?.address )
                setValue( "father_name", parents?.father_name )
                setValue( "mother_name", parents?.mother_name )
                setValue( "phone_number1", parents?.phone_number1 )
                setValue( "phone_number2", parents?.phone_number2 )
            }
        }
        setAsDefaultValues()

    }, [studentId, parents] )

    const onSubmit = async ( event: React.FormEvent, parentId: string ) => {

        event.preventDefault();

        handleSubmit( async ( data ) => {

            try {
                
                await updateParent( { ...data, parentId } );

            } catch ( error: any ) {
                throw new Error( error.message );
            }
        } )( event );
    }

    const currentValue = getValues()
    return {
        parents,
        register,
        onSubmit,
        currentValue,
        // setValue,
        getValues,
        // errors
    }
}
