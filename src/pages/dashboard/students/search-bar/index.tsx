import React from 'react'
import * as Icon from "@phosphor-icons/react"


export const SearchBar = () => {


    return (
        <div className='border border-neutral-900 h-14 flex items-center justify-center rounded-md px-4 max-sm:px-2 w-full max-w-sm '>
            <Icon.MagnifyingGlass size={28} weight='light' />
            <input type="text" className='pl-2  w-full max-sm:placeholder:text-sm' placeholder='PESQUISAR ALUNO' />
        </div>
    )
}
