import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  const [species, setSpecies] = useState([]);
  const [people, setPeople] = useState([]);
  const [type, setType] = useState('species');

  async function getSpecies() {
    const response = await fetch(`https://ghibliapi.herokuapp.com/species`);
    const data = await response.json();

    setSpecies(data);
  }

  async function getPeople() {
    const response = await fetch(`https://ghibliapi.herokuapp.com/people`);
    const data = await response.json();

    setPeople(data);
  }

  return (
    <div className="App">
      {type === 'species' ? <ListItem data={species} type={type} /> : null}
      {type === 'people' ? <ListItem data={people} type={type} /> : null}
      <button
        onClick={() => {
          setType('species');
          getSpecies();
        }}
      >
        Get All Species
      </button>
      <button
        onClick={() => {
          setType('people');
          getPeople();
        }}
      >
        Get People
      </button>
    </div>
  );
}

export default App;
