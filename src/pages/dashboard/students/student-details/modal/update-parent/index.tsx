import { useModalContext } from '@/context/modal-context';
import { daysOfTheWeek } from '@/data';
import { useUpdateParent, useUpdateStudent } from '@/hooks';
import { momentJS } from '@/services/moment-js';
import * as Icon from "@phosphor-icons/react"
import React from 'react'

interface UpdateParentProps {
  studentId: string;
}

export const UpdateParent = ( { studentId }: UpdateParentProps ) => {

  const {
    onSubmit,
    register,
    parents,
    currentValue
  } = useUpdateParent( studentId as string )

  const { updateParent } = useModalContext()

  return (
    <div className='w-2/4 max-lg:h-full max-lg:w-full flex flex-col items-start justify-center transition-all duration-300 ease-out max-md:justify-start border border-black rounded-md'>
      <header className='flex w-full items-center justify-between p-2'>
        <p className='font-semibold'>EDITAR DADOS DO RESPONSÁVEL</p>
        <Icon.X onClick={() => updateParent.setState( false )} size={28} weight='light' className='cursor-pointer' />
      </header>

      <form onSubmit={( e ) => onSubmit( e, parents?.id as string )} className='flex flex-col w-full items-center justify-center gap-4 p-2 '>

        <label
          htmlFor="mother_name"
          className='flex flex-col gap-1 text-sm font-medium w-full'>
          NOME DO RESPONSÁVEL 1:
          <input
            {...register( 'mother_name' )}
            defaultValue={currentValue.mother_name ? currentValue.mother_name : parents?.mother_name}
            id="mother_name"
            type="text"
            className='border h-12 w-full pl-4  border-black rounded-md' />
        </label>
        <label
          htmlFor="father_name"
          className='flex flex-col gap-1 text-sm font-medium w-full'>
          NOME DO RESPONSÁVEL 2:
          <input
            {...register( 'father_name' )}
            defaultValue={currentValue.father_name ? currentValue.father_name : parents?.father_name}
            id="father_name"
            type="text"
            className='border h-12 w-full pl-4  border-black rounded-md' />
        </label>

        <label
          htmlFor=""
          className='flex flex-col gap-1 text-sm font-medium w-full'>
          ENDEREÇO:
          <input
            {...register( 'address' )}
            defaultValue={currentValue.address ? currentValue.address : parents?.address}
            type="text"
            id=''
            className='border h-12 w-full p-4  border-black rounded-md' />
        </label>
        <div className='w-full flex gap-2'>
          <label
            htmlFor="phone_number1"
            className='flex flex-col gap-1 text-sm font-medium w-full'>
            TELEFONE 1:
            <input
              {...register( 'phone_number1' )}
              defaultValue={currentValue.phone_number1 ? currentValue.phone_number1 : parents?.phone_number1}
              type="text"
              id="phone_number1"
              className='border h-12 w-full pl-2  border-black rounded-md' />
          </label>
          <label
            htmlFor="phone_number2"
            className='flex flex-col gap-1 text-sm font-medium w-full'>
            TELEFONE 2:
            <input
              {...register( 'phone_number2' )}
              defaultValue={currentValue.phone_number2 ? currentValue.phone_number2 : parents?.phone_number2}
              type="text"
              id='phone_number2'
              className='border h-12 w-full pl-2  border-black rounded-md' />
          </label>
        </div>

        <section className='w-full flex flex-col'>

          <section className=' mt-4 flex  gap-2'>
            <button className='h-12 border px-4 rounded-md border-black bg-primary-400'>SALVAR</button>
            <button
              type='reset'
              onClick={() => updateParent.setState( false )}
              className='h-12 border px-4 rounded-md border-black '>
              FECHAR
            </button>
          </section>
        </section>

      </form>
    </div>
  )
}
