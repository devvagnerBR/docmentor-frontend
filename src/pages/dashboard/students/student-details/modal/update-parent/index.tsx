import { useModalContext } from '@/context/modal-context';
import {  inputsData } from '@/data';
import { useUpdateParent} from '@/hooks';
import { ParentsInterface } from '@/types/parent-interface';
import * as Icon from "@phosphor-icons/react"

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

        {inputsData?.map( ( input ) => {
          return (
            <label key={input.id} htmlFor={input.name}
              className='flex flex-col gap-1 text-sm font-medium w-full'>
              {input.label}
              <input
                defaultValue={currentValue[input.name as keyof ParentsInterface] ?? parents?.[input.name as keyof ParentsInterface]}
                {...register( input.name as keyof ParentsInterface )}
                className='border h-12 w-full pl-4  border-black rounded-md'
                type={input.type} />
            </label>
          )
        } )}

        <section className='w-full flex flex-col'>

          <section className=' mt-4 flex  gap-2'>
            <button
              className='h-12 border px-4 rounded-md border-black bg-primary-400'>
              SALVAR
            </button>
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
