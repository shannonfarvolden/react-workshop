import React, { useState } from 'react';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  async function getFilms() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();

    setFilms(data);
  }

  function FilmsList() {
    return (
      <>
        <h1>Top Films</h1>
        <ul>
          {films.map((film) => (
            <li>{film.title}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="App">
      <FilmsList />
      <button onClick={getFilms}>Get All Films</button>
    </div>
  );
}

export default App;
