import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar.jsx';
import HouseStark from './components/HouseStark/HouseStark.jsx';
import HouseLannister from './components/HouseLannister/HouseLannister.jsx';
import HouseTyrell from './components/HouseTyrell/HouseTyrell.jsx';
import HouseBaratheon from './components/HouseBaratheon/HouseBaratheon.jsx';
import Maps from './components/Maps/Maps.jsx';
import Home from './components/Home/Home.jsx';
import { houses, houseStark, houseLannister, houseTyrell, houseBaratheon, maps, gotFacts } from './components/Data/Data.jsx'
// src/App.jsx

// File Purpose: This COMPONENT manages the current section state and renders sections based on navigation.
// (1–4) are the steps to building a COMPONENT (1. import, 2. define component, 3. return some jsx, 4. export)

const App = () => {
  const [section, setSection] = useState('Home');

  const [starkMembers, setStarkMembers] = useState(houseStark);
  const [lannisterMembers, setLannisterMembers] = useState(houseLannister);
  const [tyrellMembers, setTyrellMembers] = useState(houseTyrell);
  const [baratheonMembers, setBaratheonMembers] = useState(houseBaratheon);

  const addMemberToHouse = (newMember) => {
    switch (newMember.house.name) {
      case 'House Stark':
        setStarkMembers([...starkMembers, newMember]);
        break;
      case 'House Lannister':
        setLannisterMembers([...lannisterMembers, newMember]);
        break;
      case 'House Tyrell':
        setTyrellMembers([...tyrellMembers, newMember]);
        break;
      case 'House Baratheon':
        setBaratheonMembers([...baratheonMembers, newMember]);
        break;
      default:
        console.log('no matching houses')
    }
  };

  return (
    <main className="app-container">
      <NavBar setSection={setSection} />
      <div className="content-container">
        {section === 'Home' && <Home gotFacts={gotFacts} houses={houses} addMemberToHouse={addMemberToHouse}/>}
        {section === 'Stark' && <HouseStark starks={starkMembers} />}
        {section === 'Lannister' && <HouseLannister lannisters={lannisterMembers} />}
        {section === 'Tyrell' && <HouseTyrell tyrell={tyrellMembers} />}
        {section === 'Baratheon' && <HouseBaratheon baratheon={baratheonMembers} />}
        {section === 'Maps' && <Maps maps={maps} />}
      </div>
    </main>
  );
};

export default App;
