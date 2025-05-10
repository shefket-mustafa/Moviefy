import './movies.css'
import { useEffect, useState } from 'react';
import Top5Movie from '../top-5-movies/Top5Movie';
import { useMovieContext } from '../util-hooks/useMovieContext';
import { useNavigate } from 'react-router';
import { useSearchMovieByTitle } from '../../api/requests';

export default function Movies() {

  const {
      movies,
      pageIndexPopular,
      pageIndexTopRated,
      pageUpcomingIndex,
      setPageIndexPopular,
      setPageIndexTopRated,
      setPageUpcomingIndex,
      visibleMovies,
      isSearchOpen,
      setIsSearchOpen,
      searchResults,
      setSearchResults,
      searchTerm,
      setSearchTerm
    } = useMovieContext();
    
   
    const [index, setIndex] = useState(0);
    const [fadePopular, setFadePopular] = useState(false);
    const [fadeTopRated, setFadeTopRated] = useState(false);
    const [fadeUpcoming, setUpcoming] = useState(false); 
    const navigate = useNavigate();
    const {getSearchByTitle} = useSearchMovieByTitle();


    const totalMovies = movies.popularMovies.results?.length || 0;
    const totalPages = Math.ceil(totalMovies / 5);
    
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

    useEffect(() => {
      if (!searchTerm) return;
      getSearchByTitle(searchTerm)
      .then(movies => {
        setSearchResults(movies.results)
      })
    },[setSearchResults,searchTerm]);

    const searchMovieDetailsHandler = (movieId) => {
      navigate(`/movies/${movieId}/details`)
    }
    
    const closeModalHandler = () => {
      setIsSearchOpen(false);
      setSearchTerm('');
      setSearchResults([]);
    }
    

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
          <button onClick={() => navigate(`/movies/${currentMovie.id}/details`)}>Details</button>
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

{isSearchOpen && (
  <div className="search-modal">
    <button className="close-btn" onClick={closeModalHandler}>x</button>
    <h2>Results for "{searchTerm}"</h2>

    {searchResults.length > 0 ? (
      <div className="search-grid">
        {searchResults.map(movie => (
          <div onClick={() => searchMovieDetailsHandler(movie.id)} key={movie.id} className="search-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>No results found.</p>
    )}
  </div>
)}
     
<div className={`week-5 ${fadeUpcoming ? 'fade-in' : ''}`}>

      {visibleMovies.visibleUpcomingMovies.map(movie => 
      <Top5Movie 
      key={movie.id} 
      movieData={movie}/>)}
      </div>

     </div>

     
    </div>
    );
}