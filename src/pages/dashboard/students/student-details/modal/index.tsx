import React, { ReactNode } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const ModalRoot = ( { children }: { children: ReactNode } ) => {

    const { pathname } = useLocation()
    const home = pathname === '/painel/alunos'

    return (
        <div className={`  h-[calc(100vh-100px)] max-sm:pr-4 absolute backdrop-blur-md ${home ? 'bg-neutral-100/90 shadow-md pr-0 w-[calc(100%-120px)] max-md:w-full max-md:h-full' : "bg-neutral-100/10 pr-40 w-full"}   shadow-sm  flex items-start justify-center`}>
            {children}
        </div>
    )
}
