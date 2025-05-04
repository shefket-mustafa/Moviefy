import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export const useMovieContext = () => useContext(MovieContext);