
import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import Movies from "./components/movies/Movies"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


function App() {
  

  return (
    <>
      <Header />
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>

    </Routes>
    <Footer/>

      
       
    </>
  )
}

export default App
