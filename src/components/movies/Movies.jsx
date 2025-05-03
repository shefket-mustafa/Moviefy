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
    const [pageIndex, setPageIndex] = useState(0);
    const [visibleMovies, setVisibleMovies] = useState([]);

    const totalMovies = movies.popularMovies.results?.length || 0;
    const totalPages = Math.ceil(totalMovies / 5);
    
    useEffect(() => {
      if (movies.popularMovies.results) {
        setVisibleMovies(
          movies.popularMovies.results.slice(pageIndex * 5, pageIndex * 5 + 5)
        );
      }
    }, [movies.popularMovies.results, pageIndex]);

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
      getWeeklyMovies()
      .then(weeklyMoviesData => {
        setMovies(previous => {
          return {
            ...previous,
            weeklyMovies: weeklyMoviesData
          }
        })
      })
    },[])

  return (
    <div className='movies-container'>
      <div className='top-container'>
        <div style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleMovies[0]?.backdrop_path})`}} className='top-banner'>

        <div className='top-text'>
        <h1>{visibleMovies[0].title}</h1>
        <p>{visibleMovies[0].overview}</p>
        </div>

        <div className='top-btns'>
          <button>Play</button>
          <button>Details</button>
        </div>
        </div>
      </div>
     <div className='middle-container'>
      
     <div className='top-bar'>
  <button className='pagination-btn' disabled={pageIndex === 0} onClick={() => setPageIndex(i => Math.max(i - 1, 0))}>
    ◀
  </button>

  <p className='top-text'>🔥 This Week's Most Popular Movies</p>

  <button className='pagination-btn' disabled={pageIndex >= totalPages - 1} onClick={() => setPageIndex(i => i + 1)}>
    ▶
  </button>
</div>
     
     <div className='week-5'>

      {visibleMovies.map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
  
      </div>

     </div>
    </div>
    );
}