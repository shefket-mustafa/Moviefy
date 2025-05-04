// myAPI b4a2347f7dacd3d039a3465b4a2ccc4a

// https://api.themoviedb.org/3/search/movie?query=Gladiator&api_key=YOUR_API_KEY
// Returns:

// Title

// Overview (plot summary)

// Release date

// Poster path

// Popularity, vote average, etc.
//SEARCH by title

// https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY returns 20 popular movies

//https://api.themoviedb.org/3/movie/155?api_key=YOUR_API_KEY search by id 

//GET https://api.themoviedb.org/3/movie/top_rated top rated movies 

//https://image.tmdb.org/t/p/w500${poster_path} to use posters

//GET /genre/movie/list genre list

const baseUrl = 'https://api.themoviedb.org/3/movie/'

export const useGetMovies = () => {

    const getPopularMovies = async () => {

        try{
            const response = await fetch(baseUrl + `popular?api_key=b4a2347f7dacd3d039a3465b4a2ccc4a`);

            if(!response.ok){
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            return data;

        }catch(err){
            console.error('Error Fetching (catch)')
            return [];
        };
    }
    return {getPopularMovies}
};



export const useTopRatedMovies = () => {

    const getTopRatedMovies = async () => {

        try{
            const response = await fetch(baseUrl + `top_rated?api_key=b4a2347f7dacd3d039a3465b4a2ccc4a`);

            if(!response.ok){
                throw new Error('Failed to fetch popular movies');
            }

            const data = await response.json();
            return data;

        }catch(err){
            console.log(err.message);
            return[]
        }
    }

    return {getTopRatedMovies}
}

