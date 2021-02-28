import { useState, useEffect } from 'react';
import ListItem from './ListItem';

function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    async function getSpecies() {
      const response = await fetch(`https://ghibliapi.herokuapp.com/species`);
      const data = await response.json();

      setSpecies(data);
    }

    getSpecies();
  }, []);

  return <ListItem data={species} title={'Top Species'} />;
}

export default Species;
