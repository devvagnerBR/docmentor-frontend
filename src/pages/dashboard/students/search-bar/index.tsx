import React from 'react'
import * as Icon from "@phosphor-icons/react"
import { userRequests } from '@/requests'
import { StudentInterface } from '@/types/student-interface'
import { useQuery } from 'react-query'


export const SearchBar = ( { searchInput, setSearchInput }: { searchInput: string, setSearchInput: React.Dispatch<React.SetStateAction<string>> } ) => {

    const user = userRequests()

    useQuery<StudentInterface[]>( ["students", searchInput], () => user.getStudents( searchInput ), {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60, // 1 minuto,
        enabled: true,
        keepPreviousData: true
    } )

    return (
        <div className='border border-neutral-900 h-14 flex items-center justify-center rounded-md px-4 max-sm:px-2 w-full max-w-sm '>
            <Icon.MagnifyingGlass size={28} weight='light' />
            <input
                onChange={( e ) => setSearchInput( e.target.value )}
                type="text"
                className='pl-2  w-full max-sm:placeholder:text-sm uppercase'
                placeholder='PESQUISAR ALUNO'
                value={searchInput}
            />
        </div>
    )
}
