import React from 'react'
import { UserContextProvider } from '@/context'

export const ContextProvider = ( { children }: React.PropsWithChildren ) => {

    return (
        <UserContextProvider >
            {children}
        </UserContextProvider>
    )
}
