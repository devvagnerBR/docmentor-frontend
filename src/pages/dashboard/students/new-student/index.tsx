import React from 'react'
import * as Icon from "@phosphor-icons/react"
import { useModalContext } from '@/context/modal-context';
import { useQuery } from 'react-query';
import { getCookie } from '@/services';
import { userRequests } from '@/requests';
import { useNewStudent } from '@/hooks/use-new-student';


interface newStudent {
    studentId: string;
}

/*
  "name":"Lufy D Monkey",
  "birthday":"16887451225",
  "school_year":"7",
  "service_days": ["SEGUNDA_FEIRA", "TERCA_FEIRA"]
*/

const newStudentFormData = [
    { id: 1, label: 'Nome', name: 'name', type: 'text', placeholder: 'Nome do aluno' },
]

export const NewStudent = () => {

    const user = userRequests()
    const { register, onSubmit } = useNewStudent()
    const { newStudent } = useModalContext()
    const { data: teacher } = useQuery(
        "user",
        user.getUserById,
        {
            enabled: !!getCookie( "token" ),
            refetchOnWindowFocus: false
        }
    )

    return (
        <div className='w-3/4 max-sm:w-full mt-10 max-md:mt-0 h-fit shadow-md border border-black rounded-md p-4'>
            <header className='flex w-full  items-center justify-between p-2'>
                <p className='font-semibold'>NOVO ALUNO</p>
                <Icon.X
                    onClick={() => newStudent.setState( false )}
                    size={28}
                    weight='light'
                    className='cursor-pointer' />
            </header>
            <form onSubmit={onSubmit}>
                <div className='w-full flex max-lg:flex-col gap-4'>
                    <label htmlFor="password" className='w-full text-secondary-800'>
                        Nome completo <span className="text-red-400">*</span>
                        <input
                            {...register( 'name' )}
                            id="name"
                            type="text"
                            className='border h-12 w-full rounded-md mt-2 focus:bg-secondary-100 transition-all pl-2' />
                        <div className=" h-6 flex items-center justify-end">
                            {/* {errors.name && <p className=' text-red-400 text-sm text-end'>{errors.name.message}</p>} */}
                        </div>
                    </label>
                    <label htmlFor="password" className='w-full text-secondary-800'>
                        Turma  <span className="text-red-400">*</span>
                        <input
                            {...register( 'school_year' )}
                            id="school_year"
                            type="text"
                            className='border h-12 w-full rounded-md mt-2 focus:bg-secondary-100 transition-all pl-2' />
                        <div className=" h-6 flex items-center justify-end">
                            {/* {errors.school_year && <p className=' text-red-400 text-sm text-end'>{errors.school_year.message}</p>} */}
                        </div>
                    </label>
                </div>
                <div className='w-full  flex gap-4 max-md:flex-col'>

                    <label htmlFor="birthday" className='w-full text-secondary-800'>
                        Data de Nascimento  <span className="text-red-400">*</span>
                        <input
                            {...register( 'birthday' )}
                            id="birthday"
                            type="date"
                            className='border h-12 w-full rounded-md mt-2 focus:bg-secondary-100 transition-all pl-2' />
                        <div className=" h-6 flex  items-center justify-end">
                            {/* {errors.birthday && <p className=' text-red-400 text-sm text-end'>{errors.birthday.message}</p>} */}
                        </div>
                    </label>

                    <label htmlFor="service_days" className='w-full flex flex-col items-start justify-center text-secondary-800'>
                        <p> Escola  <span className="text-red-400">*</span> </p>
                        <select
                            {...register( 'school_id' )}
                            className='border mt-2 rounded-md flex items-center justify-center w-full h-12 pl-2 cursor-pointer'>
                            {teacher?.schools?.map( ( school: any ) => {
                                return <option className='text-secondary-700' key={school.id} value={school.id}> {school.name}</option>
                            } )}

                        </select>
                        <div className=" h-6 flex  items-center justify-end">

                        </div>
                    </label>
                </div>
                <section className=''>
                    <p className='w-full flex  items-start gap-2 justify-start mb-2 text-secondary-800'>Dias de atendimento <span className="text-red-400">*</span> </p>
                    <div className='flex max-md:flex-col gap-4'>
                        <label htmlFor="seg" className='flex gap-2'>
                            <input
                                {...register( 'service_days' )}
                                id='seg'
                                value="SEGUNDA_FEIRA"
                                type='checkbox'
                                className=' checked:accent-primary-400' />
                            Segunda feira
                        </label>
                        <label htmlFor="ter" className='flex gap-2'>
                            <input
                                {...register( 'service_days' )}
                                id='ter'
                                value="TERCA_FEIRA"
                                type='checkbox'
                                className=' checked:accent-primary-400' />
                            Terça Feira
                        </label>
                        <label htmlFor="qua" className='flex gap-2'>
                            <input
                                {...register( 'service_days' )}
                                id='qua'
                                value="QUARTA_FEIRA"
                                type='checkbox'
                                className=' checked:accent-primary-400' />
                            Quarta feira
                        </label>
                        <label htmlFor="qui" className='flex gap-2'>
                            <input
                                {...register( 'service_days' )}
                                id='qui'
                                value="QUINTA_FEIRA"
                                type='checkbox'
                                className=' checked:accent-primary-400' />
                            Quinta feira
                        </label>
                        <label htmlFor="sex" className='flex gap-2'>
                            <input
                                {...register( 'service_days' )}
                                id='sex'
                                value="SEXTA_FEIRA"
                                type='checkbox'
                                className=' checked:accent-primary-400' />
                            Sexta feira
                        </label>
                    </div>
                </section>
                <div className='flex gap-2 mt-8'>
                    <button className=' h-12 border px-4 rounded-md bg-primary-400 font-medium border-black'>SALVAR</button>
                    <button
                        type="reset"
                        onClick={() => newStudent.setState( false )}
                        className=' h-12 border px-4 rounded-md font-medium border-black'>FECHAR</button>
                </div>
            </form>
        </div>
    )
}
