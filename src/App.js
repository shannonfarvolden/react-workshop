import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  async function getFilms() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const filmsData = await response.json();

    setData(filmsData);
  }

  function ItemsList(props) {
    const {type} = props
    return (
      <>
        <h1>Top {type}</h1>
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="App">
      <ItemsList type={"Films"}/>
      <button onClick={getFilms}>Get All Films</button>
    </div>
  );
}

export default App;
