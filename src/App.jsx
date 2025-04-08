import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar.jsx';
import HouseStark from './components/HouseStark/HouseStark.jsx';
import HouseLannister from './components/HouseLannister/HouseLannister.jsx';
import HouseTyrell from './components/HouseTyrell/HouseTyrell.jsx';
import HouseBaratheon from './components/HouseBaratheon/HouseBaratheon.jsx';
import Maps from './components/Maps/Maps.jsx';
import Home from './components/Home/Home.jsx';
// src/App.jsx

// File Purpose: This COMPONENT manages the current section state and renders sections based on navigation.
// (1–4) are the steps to building a COMPONENT (1. import, 2. define component, 3. return some jsx, 4. export)

// 1. importing styles and components

const houseStark = [
  { name: "Eddard Stark", title: "Lord of Winterfell", description: "Honorable leader of the North." },
  { name: "Catelyn Stark", title: "Lady of Winterfell", description: "Fierce protector of her family." },
  { name: "Robb Stark", title: "Heir to Winterfell", description: "Brave young warrior." },
  { name: "Sansa Stark", title: "Lady", description: "Dreams of being a queen." },
  { name: "Arya Stark", title: "Lady", description: "Defiant and skilled with a sword." },
  { name: "Bran Stark", title: "Lord", description: "Curious and destined for more." },
  { name: "Rickon Stark", title: "Lord", description: "Youngest and wild at heart." },
  { name: "Jon Snow", title: "Bastard Son", description: "Loyal and seeking his place." },
];

const houseLannister = [
  { name: "Tywin Lannister", title: "Lord of Casterly Rock", description: "Ruthless strategist and patriarch." },
  { name: "Cersei Lannister", title: "Queen Regent", description: "Cunning and power-hungry." },
  { name: "Jaime Lannister", title: "Kingslayer", description: "Skilled knight with a complex honor." },
  { name: "Tyrion Lannister", title: "Hand of the King", description: "Witty and underestimated." },
];

const houseTyrell = [
  { name: "Mace Tyrell", title: "Lord of Highgarden", description: "Proud but easily swayed lord." },
  { name: "Olenna Tyrell", title: "Queen of Thorns", description: "Sharp-tongued and clever." },
  { name: "Loras Tyrell", title: "Knight of Flowers", description: "Charming and skilled fighter." },
  { name: "Margaery Tyrell", title: "Queen Consort", description: "Ambitious and graceful." },
];

const houseBaratheon = [
  { name: "Robert Baratheon", title: "King of the Seven Kingdoms", description: "Boisterous warrior king." },
  { name: "Stannis Baratheon", title: "Lord of Dragonstone", description: "Stern and duty-bound." },
  { name: "Renly Baratheon", title: "Lord of Storm's End", description: "Charismatic and ambitious." },
  { name: "Gendry", title: "Blacksmith", description: "Strong and unaware of his heritage." },
];
const maps = [
  { name: 'World Map', imgSrc: 'https://i.imgur.com/DrnmCbp.png', imgAlt: 'World Map of Game of Thrones', id: 1},
  { name: 'Westeros', imgSrc: 'https://i.imgur.com/Lfs8MQf.png', imgAlt: 'Map of Westeros', id: 2},
  { name: 'Essos', imgSrc: 'https://i.imgur.com/hvbI4O7.jpeg', imgAlt: 'Map of Essos', id: 3}
]
const gotFacts = [
  "The Iron Throne used in the show is made from over 200 swords — but in the books, it's described as towering and twisted with thousands.",
  "Maisie Williams (Arya Stark) and Sophie Turner (Sansa Stark) became best friends in real life while filming the show.",
  "The Dothraki language was entirely created for the show by a linguist, and it has its own grammar and over 3,000 words.",
  "Charles Dance (Tywin Lannister) once said his armor was so heavy he couldn't sit down between takes.",
  "Hodor's real name is Wylis in the show — in the books, it's Walder.",
  "Kit Harington (Jon Snow) and Rose Leslie (Ygritte) fell in love during filming and are married in real life.",
  "The Night King never speaks a single word throughout the entire series.",
  "The infamous Red Wedding scene was inspired by two real historical events: the Black Dinner and the Glencoe Massacre.",
  "Daenerys Targaryen's title got longer over time: by season 7, she was the 'Breaker of Chains, Mother of Dragons, Khaleesi of the Great Grass Sea, The Unburnt, Queen of the Andals and the First Men.'",
  "In season 1, the direwolf pups were played by real Northern Inuit dogs."
];


const App = () => {
  // 2.2 state to track which section is selected
  const [section, setSection] = useState('Home');

  // 3. return JSX based on section
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
