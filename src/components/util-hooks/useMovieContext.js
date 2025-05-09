import { useContext } from "react";
import { MovieContext } from "../context/movie-context/movieContext";

export const useMovieContext = () => useContext(MovieContext);