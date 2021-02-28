import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import People from './components/People';
import Species from './components/Species';

function App() {
  const [type, setType] = useState('species');

  return (
    <div className="App">
      {type === 'species' ? <Species /> : null}
      {type === 'people' ? <People /> : null}
      <Navbar setType={setType} />
    </div>
  );
}

export default App;
