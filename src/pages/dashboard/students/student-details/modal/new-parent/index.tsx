import { useNewParent } from '@/hooks/use-new-parent';
import React from 'react'
import * as Icon from "@phosphor-icons/react"
import { useModalContext } from '@/context/modal-context';
import { parentInputData } from '@/data';

interface newParentProps {
    studentId: string;
}

interface parentInputDataProps {
    id: number;
    label: string;
    name: 'mother_name' | 'father_name' | 'address' | 'phone_number1' | 'phone_number2';
    type: string;
}

export const NewParent = ( { studentId }: newParentProps ) => {

    const { newParent } = useModalContext()
    const { register, onSubmit } = useNewParent( studentId )

    return (
        <div className='w-2/4 h-fit max-lg:h-full max-lg:w-full flex flex-col items-start justify-center transition-all duration-300 ease-out max-md:justify-start border border-black rounded-md'>
            <header className='flex w-full items-center justify-between p-2'>
                <p className='font-semibold'>CADASTRO DE RESPONSÁVEL</p>
                <Icon.X
                    onClick={() => newParent.setState( false )}
                    size={28}
                    weight='light'
                    className='cursor-pointer' />
            </header>
            <form
                onSubmit={onSubmit}
                className='flex flex-col w-full items-center justify-center gap-4 p-2 '>
                {parentInputData?.map( ( input ) => {
                    return (
                        <label key={input.id} htmlFor={input.name}
                            className='flex flex-col gap-1 text-sm font-medium w-full'>
                            {input.label}
                            <input
                                maxLength={input.name === 'phone_number1' || input.name === 'phone_number2' ? 11 : 100}
                                {...register( input.name as "address" | "mother_name" | "father_name" | "phone_number1" | "phone_number2" )}
                                className='border h-12 w-full pl-4  border-black rounded-md'
                                type={input.type} />
                        </label>
                    )
                } )}
                <div className='flex gap-2'>
                    <button className=' h-12 border px-4 rounded-md bg-primary-400 font-medium border-black'>SALVAR</button>
                    <button
                        type="reset"
                        onClick={() => newParent.setState( false )}
                        className=' h-12 border px-4 rounded-md font-medium border-black'>FECHAR</button>
                </div>
            </form>
        </div>
    )
}
