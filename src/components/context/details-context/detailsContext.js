import { createContext } from "react";


export const DetailsContext = createContext({
    detailsMovieHandler: () => null,
    currentMovieDetails: {},

});