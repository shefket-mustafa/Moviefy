import {  useEffect, useState } from "react";
import { useGetMovies, useTopRatedMovies, useUpcomingMovies } from "../../../api/requests";
import {MovieContext} from '../movie-context/movieContext.js'

export const MovieProvider = ({ children }) => {

    const {getPopularMovies} = useGetMovies();
    const {getTopRatedMovies} = useTopRatedMovies()
    const {getUpcomingMovies} = useUpcomingMovies();

    const [pageIndexPopular, setPageIndexPopular] = useState(0);
    const [pageIndexTopRated, setPageIndexTopRated] = useState(0);
    const [pageUpcomingIndex, setPageUpcomingIndex] = useState(0);
    const [visibleMovies, setVisibleMovies] = useState({
      visiblePopularMovies: [],
      visibleTopRatedMovies: [],
      visibleUpcomingMovies: []
    });

    const [movies, setMovies] = useState({
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: []
      });

      useEffect(() => {
        if (movies.popularMovies.results) {
          const visiblePopular = movies.popularMovies.results.slice(pageIndexPopular * 5, pageIndexPopular * 5 + 5);
          setVisibleMovies( prev => ({
            ...prev,
            visiblePopularMovies: visiblePopular
          })
          );
        }
      }, [movies.popularMovies.results, pageIndexPopular]);
  
  
      useEffect(() => {
        if(movies.topRatedMovies.results) {
          const visibleTopRated = movies.topRatedMovies.results.slice(pageIndexTopRated * 5, pageIndexTopRated * 5 +5);
          setVisibleMovies( prev => ({
            ...prev,
            visibleTopRatedMovies: visibleTopRated
          }))
        }
      },[movies.topRatedMovies.results, pageIndexTopRated])
  
      useEffect(() => {
        if(movies.upcomingMovies.results) {
          const visibleUpcoming = movies.upcomingMovies.results.slice(pageUpcomingIndex * 5, pageUpcomingIndex * 5 +5);
          setVisibleMovies( prev => ({
            ...prev,
            visibleUpcomingMovies: visibleUpcoming
          }))
        }
      },[movies.upcomingMovies.results, pageUpcomingIndex])

      useEffect(() =>{
        getPopularMovies()
        .then(popularMoviesData => {
          setMovies(previous => {
            return {
              ...previous,
              popularMovies: popularMoviesData
            }
          });
        })
      },[]);
  
      useEffect(() => {
        getTopRatedMovies()
        .then(topRatedMovies => {
          setMovies(previous => {
            return {
              ...previous,
              topRatedMovies: topRatedMovies
            }
          })
        })
      },[])
  
      useEffect(() => {
        getUpcomingMovies()
        .then(upcomingMovies => {
          setMovies(previous => {
            return {
              ...previous,
              upcomingMovies: upcomingMovies
            }
          })
        })
      },[]);

      

      return (
        <MovieContext.Provider value={{
          movies, 
          setMovies, 
          pageIndexPopular, 
          pageIndexTopRated, 
          pageUpcomingIndex,
          setPageIndexPopular,
          setPageIndexTopRated,
          setPageUpcomingIndex,
          visibleMovies
          
          }}>
            {children}
        </MovieContext.Provider>
      )
}

