import * as Icon from "@phosphor-icons/react"
import { useModalContext } from '@/context/modal-context';
import { useStudentDetails } from '@/hooks/use-student-details';
interface DeleteStudentProps {
  studentId: string;
}

export const ConfirmStudentDelete = ( { studentId }: DeleteStudentProps ) => {

  const { deleteStudent: deleteModal } = useModalContext()
  const { deleteStudent } = useStudentDetails( studentId! )

  return (
    <div
      className='max-w-fit max-lg:h-full  max-lg:w-full flex flex-col items-start justify-start transition-all duration-300 ease-out max-md:justify-start border border-black rounded-md'>

      <header className='flex gap-4 w-full  items-center justify-between p-2'>
        <p className='font-semibold'>CONFIRMAR EXCLUSÃO DE ALUNO</p>
        <Icon.X onClick={() => deleteModal.setState( false )} size={28} weight='light' className='cursor-pointer' />
      </header>

      <section className='py-4 px-4 flex items-center flex-col'>
        <h1 className='text-2xl font-semibold'>Você deseja mesmo deletar o aluno?</h1>
        <h1 className='text-xs'>Após a exclusão os dados não poderão ser recuperados.</h1>
        <div className='w-full mt-4 flex items-center justify-center gap-4'>
          <button
            onClick={() => deleteStudent()}
            className='h-12 border px-4 bg-red-400 text-white rounded-md'>DELETAR</button>
          <button
            onClick={() => deleteModal.setState( false )}
            className='h-12 border px-4 rounded-md'>VOLTAR</button>
        </div>
      </section>

    </div>
  )
}
