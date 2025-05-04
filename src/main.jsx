import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { MovieProvider } from './components/context/MoviesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <MovieProvider>
    <App />
    </MovieProvider>
  </StrictMode>
  </BrowserRouter>
)
