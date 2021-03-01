import { useState, useEffect } from 'react';
import Search from './Search';
import './ListItems.css';

function People() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getPeople() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/people`);
      const data = await response.json();

      setPeople(data);
    }

    getPeople();
  }, []);

  return (
    <>
      <h2>People</h2>
      <Search type={'people'} setSearch={setSearch} />
      <div className="list-container">
        <div className="list-card">
          {people
            .filter((person) =>
              person.name.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((person) => (
              <div className="item" key={person.name}>
                <h3>{person.name}</h3>
                <p>Age: {person.age}</p>
                <p>Hair Colour: {person.eye_color}</p>
                <p>Eye Colour: {person.hair_color}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default People;
