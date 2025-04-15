import { NavLink } from 'react-router';
import './home.css'
import welcomingImage from '/images/home-page-container.jpg';

export default function Home() {
  return (
  <>
  <div className='home-page-container'>

    <div className='sub-container'>
    <div className='home-page-welcoming'>
    <p>Welcome to <strong>Moviegram</strong> — your gateway to the world of movies. <br/>  
     Discover trending films, search by title, and explore <br/> cinematic gems from around the globe.</p>
      <NavLink className={'home-nav'} to={'/movies'}>Explore</NavLink>
    </div>

    <div className='welcoming-image'>
      <img src={welcomingImage} alt="Loading.." />
    </div>

    </div> 
  </div>
  </>
    );
}