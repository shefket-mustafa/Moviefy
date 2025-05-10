import { useNavigate, useParams } from 'react-router';
import { useDetailsContext } from '../util-hooks/useDetailsContext';
import './movieDetails.css';
import { useMovieDetails } from '../../api/requests';
import { useEffect, useState } from 'react';

export default function MovieDetails() {

    const {currentMovieDetails, detailsMovieHandler} = useDetailsContext();
    const {getMovieDetails} = useMovieDetails();

    const [currentMovie, setCurrentMovie] = useState({});
    const navigate = useNavigate();

    const movieId = useParams();
    const id = movieId.id;
    
    useEffect(() => {
        getMovieDetails(id)
        .then(movie => {
            setCurrentMovie(movie)
            console.log(movie);
        })
    },[id])

    const backButtonHandler = () => {
      if(window.history.length > 1){
        navigate(-1)
      } else {
        navigate('/movies')
      }
    }


  return (

    <div className='details-bg'>

    <div className="details-container">
      <div className="details-left">
        <img
          src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
          alt={currentMovie.title}
          className="poster"
        />
      </div>

      <div className="details-right">
        <div className='details-right-h-b'>
        <h1>{currentMovie.title}</h1>
        <button className="back-btn" onClick={backButtonHandler}>Back</button>
        </div>
        <p><strong>Release:</strong> {currentMovie.release_date}</p>
        <p><strong>Rating:</strong> ⭐ {currentMovie.vote_average?.toFixed(1)}</p>
        <p><strong>Runtime:</strong> {currentMovie.runtime} min</p>
        <p><strong>Genres:</strong> {currentMovie.genres?.map(g => g.name).join(', ')}</p>
        <p className="overview">{currentMovie.overview}</p>
      </div>
    </div>
    </div>

    
  )
}