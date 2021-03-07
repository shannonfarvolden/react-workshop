import { useState, useEffect } from 'react';
import Search from './Search';
import './ListItems.css';

function Films() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getFilms() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
      const data = await response.json();

      setFilms(data);
    }

    getFilms();
  }, []);

  return (
    <>
      <Search type={'films'} setSearch={setSearch} />
      <div className="list-container">
        <div className="list-card">
          {films
            .filter((film) =>
              film.title.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((film) => (
              <div className="item" key={film.title}>
                <h3>{film.title}</h3>
                <div className="details">
                  <p>Director: {film.director}</p>
                  <p>Producer: {film.producer}</p>
                  <p>Release date: {film.release_date}</p>
                  <p>Rotten Tomato Score: {film.rt_score}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Films;
