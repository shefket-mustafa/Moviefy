import { Route, Routes } from "react-router"
import Home from "./components/home/Home"
import Movies from "./components/movies/Movies"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"


function App() {
  

  return (
    <>
    <Routes>

    <Route to={'/'} element={<Home/>}/>
    <Route to={'/movies'} element={<Movies/>}/>
    <Route to={'/contact'} element={<Contact/>}/>
    <Route to={'/about'} element={<About/>}/>

    </Routes>
      
       
    </>
  )
}

export default App
