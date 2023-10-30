import React, { ReactNode } from 'react'

export const ModalRoot = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full h-screen pr-40 absolute backdrop-blur-md  bg-neutral-100/10 shadow-sm  flex items-start justify-center'>
            {children}
        </div>
    )
}
