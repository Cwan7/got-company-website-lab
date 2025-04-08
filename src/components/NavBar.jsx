const NavBar = ({ setSection }) => {

    return (
      <nav className="nav-bar">
        <button onClick={() => setSection('Home')}>🏠 Home</button>
        <button onClick={() => setSection('Stark')}>🐺 House Stark</button>
        <button onClick={() => setSection('Lannister')}>🦁 House Lannister</button>
        <button onClick={() => setSection('Tyrell')}>🌹 House Tyrell</button>
        <button onClick={() => setSection('Baratheon')}>🦌 House Baratheon</button>
        <button onClick={() => setSection('Maps')}>🗺️ Maps</button>
      </nav>
    );
  };
  
  
  export default NavBar;