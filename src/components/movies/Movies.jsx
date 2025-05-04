import './movies.css'
import { useEffect, useState } from 'react';
import { useGetMovies, useTopRatedMovies, useUpcomingMovies } from '../../api/requests';
import Top5Movie from '../top-5-movies/Top5Movie';

export default function Movies() {

    const {getPopularMovies} = useGetMovies();
    const {getTopRatedMovies} = useTopRatedMovies()
    const {getUpcomingMovies} = useUpcomingMovies();

    const [movies, setMovies] = useState({
      popularMovies: [],
      topRatedMovies: [],
      upcomingMovies: []
    });
    const [pageIndexPopular, setPageIndexPopular] = useState(0);
    const [pageIndexTopRated, setPageIndexTopRated] = useState(0);
    const [pageUpcomingIndex, setPageUpcomingIndex] = useState(0);
    const [visibleMovies, setVisibleMovies] = useState({
      visiblePopularMovies: [],
      visibleTopRatedMovies: [],
      visibleUpcomingMovies: []
    });
    const [index, setIndex] = useState(0);
    const [fadePopular, setFadePopular] = useState(false);
    const [fadeTopRated, setFadeTopRated] = useState(false);
    const [fadeUpcoming, setUpcoming] = useState(false);

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

    useEffect(() => {
      setFadePopular(true);
      const timeout = setTimeout(() => setFadePopular(false), 400);
      return () => clearTimeout(timeout)
    },[pageIndexPopular]);

    useEffect(() => {
      setFadeTopRated(true);
      const timeout = setTimeout(() => setFadeTopRated(false), 400);
      return () => clearTimeout(timeout)
    },[ pageIndexTopRated]);

    useEffect(() => {
      setUpcoming(true);
      const timeout = setTimeout(() => setUpcoming(false), 400);
      return () => clearTimeout(timeout)
    },[ pageUpcomingIndex])
    

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
     
<div className={`week-5 ${fadePopular ? 'fade-in' : ''}`}>

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
     
<div className={`week-5 ${fadeTopRated ? 'fade-in' : ''}`}>

      {visibleMovies.visibleTopRatedMovies.map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
      

      </div>

     </div>

     <div className='upcoming-container'>
      
     <div className='top-bar'>
  <button className='pagination-btn' disabled={pageUpcomingIndex === 0} onClick={() => setPageUpcomingIndex(i => Math.max(i - 1, 0))}>
    ◀
  </button>

  <p className='top-text'>🔥 Upcoming movies</p>

  <button className='pagination-btn' disabled={pageUpcomingIndex >= totalPages - 1} onClick={() => setPageUpcomingIndex(i => i + 1)}>
    ▶
  </button>
</div>
     
<div className={`week-5 ${fadeUpcoming ? 'fade-in' : ''}`}>

      {visibleMovies.visibleUpcomingMovies.map(movie => <Top5Movie key={movie.id} movieData={movie}/>)}
      

      </div>

     </div>

     
    </div>
    );
}