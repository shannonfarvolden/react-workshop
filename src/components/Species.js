import { useState, useEffect } from 'react';
import ListItems from './ListItems';
import Search from './Search';

function Species() {
  const [species, setSpecies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getSpecies() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/species`);
      const data = await response.json();

      setSpecies(data);
    }

    getSpecies();
  }, []);

  return (
    <>
      <h2>Species</h2>
      <Search type={'species'} setSearch={setSearch} />
      <ListItems data={species} title={'Top Species'} filter={search} />
    </>
  );
}

export default Species;
