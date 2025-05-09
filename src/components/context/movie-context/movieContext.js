import { createContext } from "react";

export const MovieContext = createContext({
    movies: [],
    setMovies: () => null,
    isSearchOpen: '',
    setIsSearchOpen: () => null,
    searchResults: [],
    setSearchResults: () => null,
    searchTerm: '', 
    setSearchTerm: () => null
});