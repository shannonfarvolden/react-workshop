import { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Films from './components/Films';
import People from './components/People';
import Locations from './components/Locations';

function App() {
  const [type, setType] = useState('films');

  function renderType() {
    switch (type) {
      case 'films':
        return <Films />;
      case 'locations':
        return <Locations />;
      case 'people':
        return <People />;
      default:
        return <p>Unknown Type {type}</p>;
    }
  }
  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      {renderType()}
      <SideNav setType={setType} />
    </div>
  );
}

export default App;
