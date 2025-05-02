export default function Top5Movie({ movieData,node }) {
  return (
    <div className='top-5'>
        <div className='item'>
          
          <div className='item-text'>{movieData.title}</div>
          </div>

        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="Loading.." />
        </div>
    );
}