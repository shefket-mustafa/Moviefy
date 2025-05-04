import { createContext } from "react";

export const MovieContext = createContext({
    movies: [],
    setMovies: () => null
});