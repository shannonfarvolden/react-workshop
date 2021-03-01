import { useState, useEffect } from 'react';
import Search from './Search';
import './ListItems.css';

function Locations() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getLocations() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/locations`);
      const data = await response.json();

      setLocations(data);
    }

    getLocations();
  }, []);

  return (
    <>
      <h2>Locations</h2>
      <Search type={'locations'} setSearch={setSearch} />
      <div className="list-container">
        <div className="list-card">
          {locations
            .filter((location) =>
              location.name.toLowerCase().startsWith(search.toLowerCase())
            )
            .map((location) => (
              <div className="item" key={location.name}>
                <h3>{location.name}</h3>

                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Locations;
