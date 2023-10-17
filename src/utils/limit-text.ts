export const limitText = ( text: string, limit: number ): string => {
    if ( text.length <= limit ) {
        return text;
    } else {
        return text.substring( 0, limit ) + '...';
    }
}