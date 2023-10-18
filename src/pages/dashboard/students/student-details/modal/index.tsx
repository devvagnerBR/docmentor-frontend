import React, { ReactNode } from 'react'

export const ModalRoot = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full absolute backdrop-blur-md bg-neutral-100/10 shadow-sm h-full flex items-center justify-center'>
            {children}
        </div>
    )
}
