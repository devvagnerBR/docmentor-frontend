import React from 'react'
import { SearchBar } from '@/pages'
import * as Icon from "@phosphor-icons/react"
import { userRequests } from '@/requests'
import { useQuery } from 'react-query'
import { StudentInterface } from '@/types/student-interface'
import { getPageWidth, limitText } from '@/utils'
import { Link } from 'react-router-dom'

export const DashboardStudents = () => {

    const [searchInput, setSearchInput] = React.useState<string>( "" )
    const user = userRequests()
    const { size } = getPageWidth()

    const { data: students } = useQuery<StudentInterface[]>(
        ["students", searchInput],
        () => user.getStudents( "" ),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 1 minuto
        }
    )

    return (
        <div className='w-full '>
            <header className='flex items-center gap-4 w-full'>
                <SearchBar
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <div className='border cursor-pointer h-14 w-14 flex items-center shrink-0 justify-center rounded-md bg-primary-400 border-neutral-900'>
                    <Icon.UserPlus className='fill-neutral-900' size={28} weight='light' />
                </div>
            </header>
            {students && students?.length > 0 ? <main className='mt-4'>
                {students?.map( ( student, index: number ) => {
                    return (
                        <Link key={student.id} to={student.id}>
                            <section
                                key={student.id}
                                className='h-16 border cursor-pointer transition-all ease-in-out duration-300 rounded-md border-white hover:border-black flex justify-between w-full  items-center px-4 max-sm:px-2'>
                                <div className='flex items-center gap-8 max-sm:gap-4'>
                                    <p className=' text-sm'>{( index + 1 ).toString().padStart( 2, '0' )}</p>
                                    <div className='flex flex-col gap-1'>
                                        <p className='uppercase font-semibold max-sm:text-sm'>{size >= 500 ? student.name : limitText( student?.name, 15 )}</p>
                                        <p className='text-xs uppercase font-light'>TURMA {student.school_grade}</p>
                                    </div>
                                </div>
                                {size > 600 && <Icon.CaretRight size={20} weight='light' className='fill-black' />}
                            </section>
                        </Link>
                    )
                } )}
            </main> : <p className='mt-4 text-neutral-500'>nenhum aluno encontrado</p>
            }
        </div >
    )
}
