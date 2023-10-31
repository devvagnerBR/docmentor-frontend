import React, { ReactNode } from 'react'

export const ModalRoot = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full  h-[calc(100vh-100px)] pr-40 max-sm:pr-4 absolute backdrop-blur-md  bg-neutral-100/10 shadow-sm  flex items-start justify-center'>
            {children}
        </div>
    )
}
