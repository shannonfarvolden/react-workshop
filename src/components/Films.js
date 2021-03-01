import { useState, useEffect } from 'react';
import Search from './Search';
import './ListItems.css';

function Films() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getPeople() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
      const data = await response.json();

      setFilms(data);
    }

    getPeople();
  }, []);

  return (
    <>
      <h2>Films</h2>
      <Search type={'films'} setSearch={setSearch} />
      <div className="list-container">
        <div className="list-card">
          {films
            .filter((item) =>
              item.title.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((item) => (
              <div className="item" key={item.title}>
                <h3>{item.title}</h3>
                <p>Director: {item.director}</p>
                <p>Producer: {item.producer}</p>
                <p>Release_date: {item.release_date}</p>
                <p>Rotton Tomato Score: {item.rt_score}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Films;
