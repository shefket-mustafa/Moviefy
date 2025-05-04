import './movies.css'
import { useEffect, useState } from 'react';
import { useGetMovies, useTopRatedMovies } from '../../api/requests';
import Top5Movie from '../top-5-movies/Top5Movie';

export default function Movies() {

    const {getPopularMovies} = useGetMovies();
    const {getTopRatedMovies} = useTopRatedMovies()

    const [movies, setMovies] = useState({
      popularMovies: [],
      topRatedMovies: []
    });
    const [pageIndexPopular, setPageIndexPopular] = useState(0);
    const [pageIndexTopRated, setPageIndexTopRated] = useState(0);
    const [visibleMovies, setVisibleMovies] = useState({
      visiblePopularMovies: [],
      visibleTopRatedMovies: []
    });
    const [index, setIndex] = useState(0);

    const totalMovies = movies.popularMovies.results?.length || 0;
    const totalPages = Math.ceil(totalMovies / 5);
    
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
      const timer = setInterval(() => {
        setIndex(prev => {
          const isLastMovie = movies.popularMovies.results && prev >= movies.popularMovies.results.length-1;
          return isLastMovie ? 0 : prev+1;
        });
      },5000);

      return () => clearInterval(timer);
    },[index, movies.popularMovies.results]);

    const currentMovie = movies.popularMovies.results?.[index];
    

  return (
    <div className='movies-container'>
      <div className='top-container'>
        <div style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path})`}} className='top-banner'>

        <div className='top-text'>
        <h1>{currentMovie?.title}</h1>
        <p>{currentMovie?.overview}</p>
        </div>

        <div className='top-btns'>
          <button>Play</button>
          <button>Details</button>
        </div>
        </div>
      </div>
     <div className='this-weeks-container'>
      
     <div className='top-bar'>
  <button className='pagination-btn' disabled={pageIndexPopular === 0} onClick={() => setPageIndexPopular(i => Math.max(i - 1, 0))}>
    ◀
  </button>

  <p className='top-text'>🔥 This Week's Most Popular Movies</p>

  <button className='pagination-btn' disabled={pageIndexPopular >= totalPages - 1} onClick={() => setPageIndexPopular(i => i + 1)}>
    ▶
  </button>
</div>
     
  <div className={`week-5 ${pageIndexPopular}-page fade-in`}>

      {visibleMovies.visiblePopularMovies.map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
      

      </div>

     </div>

     <div className='top-rated-container'>
      
     <div className='top-bar'>
  <button className='pagination-btn' disabled={pageIndexTopRated === 0} onClick={() => setPageIndexTopRated(i => Math.max(i - 1, 0))}>
    ◀
  </button>

  <p className='top-text'>🔥 This Week's Top Rated Movies</p>

  <button className='pagination-btn' disabled={pageIndexTopRated >= totalPages - 1} onClick={() => setPageIndexTopRated(i => i + 1)}>
    ▶
  </button>
</div>
     
  <div className={`week-5 ${pageIndexTopRated}-page fade-in`}>

      {visibleMovies.visibleTopRatedMovies.map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
      

      </div>

     </div>

     
    </div>
    );
}