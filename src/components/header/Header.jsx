
import { NavLink } from 'react-router';
import icon from '../../../public/images/header-icon.png'
import { useMovieContext } from '../util-hooks/useMovieContext'
import './header.css'

export default function Header() {

  const {setSearchTerm, searchTerm, setIsSearchOpen, searchResults, setSearchResults} = useMovieContext()

  const searchHandler = (term) => {
    setSearchTerm(term);
    setIsSearchOpen(true);
  };
  return (
      <>
      <div className='header'>

        <div className='icon'><img src={icon} alt="Loading.." />
            <p className='header-text'>Moviefy</p>
        </div>

        <div className='search'>
          <input type="text"
          name='search' 
          placeholder='Batman' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          <button onClick={()=>searchHandler(searchTerm)}>Search</button>
        </div>

        <div className='nav'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
        <NavLink to={'/contact'}>Contact us</NavLink>

        </div>

     

      </div>
      </>
    );
}