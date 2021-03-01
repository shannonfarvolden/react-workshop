import { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import People from './components/People';
import Species from './components/Species';

function App() {
  const [type, setType] = useState('species');

  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      {type === 'species' ? <Species /> : null}
      {type === 'people' ? <People /> : null}
      <SideNav setType={setType} />
    </div>
  );
}

export default App;
