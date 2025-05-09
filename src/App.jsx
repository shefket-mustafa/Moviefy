
import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import Movies from "./components/movies/Movies"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MovieDetails from "./components/movie-details/MovieDetails"
import ScrollComponent from "./components/util-components/ScrollComponent"


function App() {
  

  return (
    <>
      <Header />
      <ScrollComponent />
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/movies/:id/details' element={<MovieDetails />}/>

    </Routes>
    <Footer/>

      
       
    </>
  )
}

export default App
