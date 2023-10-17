import React from "react";

export const mouseHover = () => {

    const [isHovered, setIsHovered] = React.useState<boolean>( false )

    // const handleMouseEnter = () => {
    //     setIsHovered( true );
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered( false );
    // };

    let hoverTimeout: number | undefined
    
    const handleMouseEnter = () => {
        hoverTimeout = window.setTimeout( () => {
            setIsHovered( true );
        }, 300 ); // 2000 milissegundos (2 segundos)
    };

    const handleMouseLeave = () => {
        clearTimeout( hoverTimeout );
        setIsHovered( false );
    };


    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    }
}