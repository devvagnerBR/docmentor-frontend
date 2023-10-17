import React from "react";

export const mouseHover = () => {

    const [isHovered, setIsHovered] = React.useState<boolean>( false )

    const handleMouseEnter = () => {
        setIsHovered( true );
    };

    const handleMouseLeave = () => {
        setIsHovered( false );
    };

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    }
}