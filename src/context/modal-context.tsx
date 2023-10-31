import React from 'react'

interface UserContextProps {
    updateStudent: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }
    updateParent: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }
    newReport: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }
    deleteStudent: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }
    newParent: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    }

}

const ModalContext = React.createContext<UserContextProps | null>( null )

const ModalContextProvider = ( { children }: React.PropsWithChildren ) => {

    const [updateStudentModal, setUpdateStudentModal] = React.useState<boolean>( false )
    const [updateParentModal, setUpdateParentModal] = React.useState<boolean>( false )
    const [newReportModal, setNewReportModal] = React.useState<boolean>( false )
    const [deleteStudentModal, setDeleteStudentModal] = React.useState<boolean>( false )
    const [newParentModal, setNewParentModal] = React.useState<boolean>( true )

    const updateStudent = {
        state: updateStudentModal,
        setState: setUpdateStudentModal
    }

    const updateParent = {
        state: updateParentModal,
        setState: setUpdateParentModal
    }

    const newReport = {
        state: newReportModal,
        setState: setNewReportModal
    }

    const deleteStudent = {
        state: deleteStudentModal,
        setState: setDeleteStudentModal
    }

    const newParent = {
        state: newParentModal,
        setState: setNewParentModal
    }
    return (
        <ModalContext.Provider value={{ updateStudent, updateParent, newReport, deleteStudent, newParent }}>
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