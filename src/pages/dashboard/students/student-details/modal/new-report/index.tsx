import React from 'react'
import * as Icon from "@phosphor-icons/react"
import { useModalContext } from '@/context/modal-context';
import { useNewReport } from '@/hooks';


interface UpdateParentProps {
    studentId: string;
}

export const NewReport = ( { studentId }: UpdateParentProps ) => {


    const { newReport } = useModalContext()
    const { register, currentValue, getValues, onSubmit } = useNewReport( studentId )
    const [reportLength, setReportLength] = React.useState( "" )

    
    return (
        <div className='w-2/4 max-lg:h-full  max-lg:w-full flex flex-col items-start justify-start transition-all duration-300 ease-out max-md:justify-start border border-black rounded-md'>
            <header className='flex w-full  items-center justify-between p-2'>
                <p className='font-semibold'>NOVO RELATÓRIO</p>
                <Icon.X onClick={() => newReport.setState( false )} size={28} weight='light' className='cursor-pointer' />
            </header>
            <form className='flex flex-col h-full  w-full items-center justify-start gap-4 p-2 ' onSubmit={( e ) => onSubmit( e, studentId )}>
                <label className='flex flex-col gap-2 w-full font-medium'>
                    TÍTULO DO RELATÓRIO
                    <input
                        {...register( 'title' )}
                        type="text" className='border h-12 w-full rounded-md border-black pl-2' />
                </label>
                <label className='w-full h-full'>
                    <textarea
                        {...register( 'report' )}
                        maxLength={3000}
                        onChange={( e ) => setReportLength( e.target.value )}
                        className='border min-h-[445px] h-full  w-full rounded-md border-black p-2' />
                </label>
                <div className='w-full items-center justify-end'>
                    <p>total de Caracteres: <span className={`font-bold ${reportLength.length >= 2970 && reportLength.length < 3000 && 'text-red-500'}`}> {reportLength ? reportLength.length : 0} </span></p>
                </div>
                <div className='flex gap-2'>
                    <button className=' h-12 border px-4 rounded-md bg-primary-400 font-medium border-black'>SALVAR</button>
                    <button
                        type="reset"
                        onClick={() => newReport.setState( false )}
                        className=' h-12 border px-4 rounded-md font-medium border-black'>FECHAR</button>
                </div>
            </form>
        </div>
    )
}
