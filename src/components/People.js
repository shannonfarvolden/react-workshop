import { useState, useEffect } from 'react';
import ListItems from './ListItems';
import Search from './Search';

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
      <h1>People in Studio Ghibli films</h1>
      <ListItems data={people} filter={search} />
      <Search type={'people'} setSearch={setSearch} />
    </>
  );
}

export default People;
