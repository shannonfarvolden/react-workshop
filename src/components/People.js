import { useState, useEffect } from 'react';
import ListItems from './ListItems';

function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function getPeople() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/people`);
      const data = await response.json();

      setPeople(data);
    }

    getPeople();
  }, []);

  return <ListItems data={people} title={'Top People'} />;
}

export default People;
