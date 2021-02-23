import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('species');

  useEffect(() => {
    getListResults();
  }, [type]);

  async function getListResults() {
    const response = await fetch(`https://ghibliapi.herokuapp.com/${type}`);
    const data = await response.json();

    setData(data);
  }

  function ItemsList() {
    return (
      <>
        <h1>Top {type}</h1>
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="App">
      <ItemsList />
      <button
        onClick={() => {
          setType('species');
        }}
      >
        Get All Species
      </button>
      <button
        onClick={() => {
          setType('people');
        }}
      >
        Get People
      </button>
    </div>
  );
}

export default App;
