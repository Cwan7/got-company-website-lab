import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar.jsx';
import HouseStark from './components/HouseStark/HouseStark.jsx';
import HouseLannister from './components/HouseLannister/HouseLannister.jsx';
import HouseTyrell from './components/HouseTyrell/HouseTyrell.jsx';
import HouseBaratheon from './components/HouseBaratheon/HouseBaratheon.jsx';
import Maps from './components/Maps/Maps.jsx';
import Home from './components/Home/Home.jsx';
import { houseStark, houseLannister, houseTyrell, houseBaratheon, maps, gotFacts } from './components/Data/Data.jsx'
// src/App.jsx

// File Purpose: This COMPONENT manages the current section state and renders sections based on navigation.
// (1–4) are the steps to building a COMPONENT (1. import, 2. define component, 3. return some jsx, 4. export)

const App = () => {
  const [section, setSection] = useState('Home');
  return (
    <main className="app-container">
      <NavBar setSection={setSection} />
      <div className="content-container">
        {section === 'Home' && <Home gotFacts={gotFacts}/>}
        {section === 'Stark' && <HouseStark starks={houseStark} />}
        {section === 'Lannister' && <HouseLannister lannisters={houseLannister} />}
        {section === 'Tyrell' && <HouseTyrell tyrell={houseTyrell} />}
        {section === 'Baratheon' && <HouseBaratheon baratheon={houseBaratheon} />}
        {section === 'Maps' && <Maps maps={maps} />}
      </div>
    </main>
  );
};

export default App;
