import React from 'react'

export const useFreezeScreen = ( state: boolean ) => {

    React.useEffect( () => {
        if ( state ) {
            document.body.classList.add( 'overflow-hidden' )
        } else {
            document.body.classList.remove( 'overflow-hidden' )
        }

        return () => {
            document.body.classList.remove( 'overflow-hidden' )
        }
    }, [state] )



}
