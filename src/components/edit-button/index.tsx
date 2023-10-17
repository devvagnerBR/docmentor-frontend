import React from 'react'

interface EditButtonProps {
    onClick: () => void;
    title: string;
}

export const EditButton = ( { onClick, title }: EditButtonProps ) => {
    return (
        <div
            className='border rounded-md px-2 cursor-pointer bg-neutral-200 border-neutral-950'
            onClick={onClick}>
            <p className='text-[10px] leading-5'>{title}</p>
        </div>
    )
}
