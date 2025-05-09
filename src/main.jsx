import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import DetailsContext from './components/context/details-context/DetailsContext.jsx'
import { MovieProvider } from './components/context/movie-context/MoviesContext.jsx'
import DetailsProvider from './components/context/details-context/DetailsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <DetailsProvider>
    <MovieProvider>
    <App />
    </MovieProvider>
    </DetailsProvider>
  </StrictMode>
  </BrowserRouter>
)
