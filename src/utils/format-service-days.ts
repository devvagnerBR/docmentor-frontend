export const formatServiceDays = ( day: string ) => {
    switch ( day ) {
        case "SEGUNDA_FEIRA":
            return "SEGUNDA";
        case "TERCA_FEIRA":
            return "TERÇA";
        case "QUARTA_FEIRA":
            return "QUARTA";
        case "QUINTA_FEIRA":
            return "FEIRA";
        case "SEXTA_FEIRA":
            return "SEXTA";
        default:
            return day;
    }
}