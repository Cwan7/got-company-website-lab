import {useState} from 'react';

const HouseLannister = (props) => {
const [show, setShow] = useState(false);

const displayHouse = () => {
    setShow(!show);
}
    return (
<div>
      <h2 onClick={displayHouse}>House Lannister</h2>
      {show && (
        <ul>
          {props.lannisters.map((member, index) => (
            <li key={index} className="house-cards">
              <h3>Name: {member.name}</h3>
              <p>Title: {member.title}</p>
              <p>Info: {member.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
        
    )
}
export default HouseLannister;