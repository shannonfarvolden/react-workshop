import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  async function getSpecies() {
    const response = await fetch('https://ghibliapi.herokuapp.com/species');
    const speciesData = await response.json();

    setData(speciesData);
  }

  async function getPeople() {
    const response = await fetch('https://ghibliapi.herokuapp.com/people');
    const peopleData = await response.json();

    setData(peopleData);
  }

  function ItemsList(props) {
    const {type} = props
    return (
      <>
        <h1>Top {type}</h1>
        <ul>
          {data.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="App">
      <ItemsList type={"Species"}/>
      <button onClick={getSpecies}>Get All Species</button>
      <button onClick={getPeople}>Get People</button>
    </div>
  );
}

export default App;
