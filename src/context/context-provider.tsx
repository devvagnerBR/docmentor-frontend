import React from 'react'
import { UserContextProvider } from '@/context'
import { ModalContextProvider, useModalContext } from './modal-context'
import { useFreezeScreen } from '@/utils'

export const ContextProvider = ( { children }: React.PropsWithChildren ) => {

    return (
        <UserContextProvider >
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </UserContextProvider>
    )
}
