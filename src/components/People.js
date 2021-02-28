import { useState, useEffect } from 'react';
import ListItem from './ListItem';

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

  return <ListItem data={people} title={'Top People'} />;
}

export default People;
