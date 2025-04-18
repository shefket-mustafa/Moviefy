import { Link } from 'react-router';
import './movies.css'
import { useEffect, useState } from 'react';
import { useGetMovies, useGetWeeklyMovies } from '../../api/requests';

export default function Movies() {

    const {getPopularMovies} = useGetMovies();
    const {getWeeklyMovies} = useGetWeeklyMovies()
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
      getPopularMovies()
      .then(data => {
        console.log(data.results);
      })
    },[getPopularMovies]);

    useEffect(() => {
      getWeeklyMovies()
      .then(data => {
        console.log(data);
      })
    })
  return (
    <div className='movies-container'>

     <div className='top-container'>

      
      <p className='top-text'>🔥 This Week's Most Popular Movies</p>
     

     <div className='week-5'>

      <div className='top-5'>

        <div className='item'>
          <div className='item-number'><strong>01</strong>
          <div className='item-text'>Gladiator</div>
          </div>

        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_8Sck6PjokJTJj9f6GDCgOLTzcHa6JYbKTa29Jg4L1oOAgq9j0XbX0E8JEGn877k6MhQRlgWEwah3hzv5SCWFuhs3tb3wI1ml7V01HoKzUDPlKpZp0ys3SYguP6N0mKVmm3KqLwogUA6w/s1600/one_hundred_twenty_seven_hours.jpg" alt="Loading.." />
        </div>

      </div>

      <div className='top-5'>

        <div className='item'>
          <div className='item-number'><strong>01</strong>
          <div className='item-text'>Gladiator</div>
          </div>

        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_8Sck6PjokJTJj9f6GDCgOLTzcHa6JYbKTa29Jg4L1oOAgq9j0XbX0E8JEGn877k6MhQRlgWEwah3hzv5SCWFuhs3tb3wI1ml7V01HoKzUDPlKpZp0ys3SYguP6N0mKVmm3KqLwogUA6w/s1600/one_hundred_twenty_seven_hours.jpg" alt="Loading.." />
        </div>

      </div>

      <div className='top-5'>

        <div className='item'>
          <div className='item-number'><strong>01</strong>
          <div className='item-text'>Gladiator</div>
          </div>

        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_8Sck6PjokJTJj9f6GDCgOLTzcHa6JYbKTa29Jg4L1oOAgq9j0XbX0E8JEGn877k6MhQRlgWEwah3hzv5SCWFuhs3tb3wI1ml7V01HoKzUDPlKpZp0ys3SYguP6N0mKVmm3KqLwogUA6w/s1600/one_hundred_twenty_seven_hours.jpg" alt="Loading.." />
        </div>

      </div>

      <div className='top-5'>

        <div className='item'>
          <div className='item-number'><strong>01</strong>
          <div className='item-text'>Gladiator</div>
          </div>

        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_8Sck6PjokJTJj9f6GDCgOLTzcHa6JYbKTa29Jg4L1oOAgq9j0XbX0E8JEGn877k6MhQRlgWEwah3hzv5SCWFuhs3tb3wI1ml7V01HoKzUDPlKpZp0ys3SYguP6N0mKVmm3KqLwogUA6w/s1600/one_hundred_twenty_seven_hours.jpg" alt="Loading.." />
        </div>

      </div>

      <div className='top-5'>

        <div className='item'>
          <div className='item-number'><strong>01</strong>
          <div className='item-text'>Gladiator</div>
          </div>

        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_8Sck6PjokJTJj9f6GDCgOLTzcHa6JYbKTa29Jg4L1oOAgq9j0XbX0E8JEGn877k6MhQRlgWEwah3hzv5SCWFuhs3tb3wI1ml7V01HoKzUDPlKpZp0ys3SYguP6N0mKVmm3KqLwogUA6w/s1600/one_hundred_twenty_seven_hours.jpg" alt="Loading.." />
        </div>

      </div>

     </div>

     </div>

    </div>
    );
}