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
            .filter((item) =>
              item.name.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((item) => (
              <div className="item" key={item.name}>
                <h3>{item.name}</h3>
                <p>Age: {item.age}</p>
                <p>Hair Colour: {item.eye_color}</p>
                <p>Eye Colour: {item.hair_color}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default People;
