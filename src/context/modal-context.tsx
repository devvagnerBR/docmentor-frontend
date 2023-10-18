import React from 'react'

interface UserContextProps {
    updateStudent: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

const ModalContext = React.createContext<UserContextProps | null>( null )

const ModalContextProvider = ( { children }: React.PropsWithChildren ) => {

    const [updateStudentModal, setUpdateStudentModal] = React.useState<boolean>( false )

    const updateStudent = {
        state: updateStudentModal,
        setState: setUpdateStudentModal
    }



    return (
        <ModalContext.Provider value={{ updateStudent }}>
            {children}
        </ModalContext.Provider>
    )
}

const useModalContext = () => {

    const context = React.useContext( ModalContext )
    if ( !context ) throw new Error( "useModalContext precisa estar dentro de um provider" );
    return context

}


export { ModalContextProvider, useModalContext }