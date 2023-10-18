import React from 'react'
import * as Icon from "@phosphor-icons/react"
import { daysOfTheWeek } from '@/data';
import { useUpdateStudent } from '@/hooks';
import { momentJS } from '@/services/moment-js';
import { useModalContext } from '@/context/modal-context';

interface UpdateStudentProps {
    studentId: string;
}

export const UpdateStudent = ( { studentId }: UpdateStudentProps ) => {

    const {
        onSubmit,
        register,
        student,
        currentValue
    } = useUpdateStudent( studentId as string )

    const { updateStudent } = useModalContext()

    return (
        <div className='w-2/4 max-lg:h-full max-lg:w-full flex flex-col items-start justify-center border border-black rounded-md'>
            <header className='flex w-full items-center justify-between p-2'>
                <p className='font-semibold'>EDITAR DADOS DO ALUNO</p>
                <Icon.X onClick={() => updateStudent.setState( false )} size={28} weight='light' className='cursor-pointer' />
            </header>

            <form onSubmit={( e ) => onSubmit( e, studentId )} className='flex flex-col w-full items-center justify-center gap-4 p-2 '>

                <label
                    htmlFor="name"
                    className='flex flex-col gap-1 text-sm font-medium w-full'>
                    NOME:
                    <input
                        {...register( 'name' )}
                        defaultValue={currentValue.name ? currentValue.name : student?.name}
                        id="name"
                        type="text"
                        className='border h-12 w-full pl-4  border-black rounded-md' />
                </label>

                <label
                    htmlFor=""
                    className='flex flex-col gap-1 text-sm font-medium w-full'>
                    DATA DE NASCIMENTO:
                    <input
                        defaultValue={currentValue.birthday ? currentValue.birthday : momentJS.utc( Number( student?.birthday ) ).format( 'YYYY-MM-DD' )}
                        {...register( 'birthday' )}
                        type="date"
                        id=''
                        className='border h-12 w-full p-4  border-black rounded-md' />
                </label>

                <label
                    htmlFor=""
                    className='flex flex-col gap-1 text-sm font-medium w-full'>
                    TURMA:
                    <input
                        defaultValue={student?.school_grade}
                        {...register( 'school_year' )}
                        type="text"
                        className='border h-12 w-full pl-2  border-black rounded-md' />
                </label>

                <section className='w-full flex flex-col gap-1'>
                    <p className='font-semibold text-sm'>DIAS DE ATENDIMENTO:</p>
                    <div className='flex gap-6 items-center flex-wrap'>
                        {daysOfTheWeek?.map( ( day ) => {
                            return (
                                <label key={day.id} htmlFor={day.value} className='flex items-center gap-2'>
                                    <input
                                        id={day.value}
                                        type="checkbox"
                                        value={day.value}
                                        {...register( "service_days" )}
                                        className='checked:accent-primary-400'
                                    />
                                    {day.text}
                                </label>
                            )
                        } )}
                    </div>
                    <section className=' mt-4 flex  gap-2'>
                        <button className='h-12 border px-4 rounded-md border-black bg-primary-400'>SALVAR</button>
                        <button
                            type='reset'
                            onClick={() => updateStudent.setState( false )}
                            className='h-12 border px-4 rounded-md border-black '>
                            FECHAR
                        </button>
                    </section>
                </section>

            </form>
        </div>
    )
}
