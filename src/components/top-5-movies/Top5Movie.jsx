export default function Top5Movie({ movieData }) {
  return (
    <div className='top-5'>
        <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt="Loading.." />
        </div>
    );
}