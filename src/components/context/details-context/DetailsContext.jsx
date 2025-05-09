import { useState } from "react";
import { DetailsContext } from "./detailsContext";


export default function DetailsProvider({ children }) {

    const [currentMovieDetails, setCurrentMovieDetails] = useState({});

    const detailsMovieHandler = (currentMovie) => {
        setCurrentMovieDetails(currentMovie);
    };

  return (
      <DetailsContext.Provider value={{detailsMovieHandler, currentMovieDetails}}>

        {children}

      </DetailsContext.Provider>
    );
}