import { Link } from 'react-router';
import './movies.css'
import { useEffect, useState } from 'react';
import { useGetMovies, useGetWeeklyMovies } from '../../api/requests';
import Top5Movie from '../top-5-movies/Top5Movie';

export default function Movies() {

    const {getPopularMovies} = useGetMovies();
    const {getWeeklyMovies} = useGetWeeklyMovies()
    const [movies, setMovies] = useState({
      popularMovies: [],
      weeklyMovies: []
    });
    

    useEffect(() =>{
      getPopularMovies()
      .then(popularMoviesData => {
        setMovies(previous => {
          return {
            ...previous,
            popularMovies: popularMoviesData
          }
        })
      })
    },[getPopularMovies]);

    useEffect(() => {
      getWeeklyMovies()
      .then(weeklyMoviesData => {
        setMovies(previous => {
          return {
            ...previous,
            weeklyMovies: weeklyMoviesData
          }
        })
      })
    },[getWeeklyMovies])

  return (
    <div className='movies-container'>
     <div className='top-container'>
      <p className='top-text'>🔥 This Week's Most Popular Movies</p>
     
     <div className='week-5'>

      {movies.popularMovies.results?.slice(0,5).map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
    


     </div>

     </div>
    </div>
    );
}