import {useState} from 'react';

const HouseBaratheon = (props) => {
// const [show, setShow] = useState(false);

// const displayHouse = () => {
//     setShow(!show);
// }
    return (
    <div id="house-baratheon">
      <h2 >House Baratheon</h2>
        <ul>
          {props.baratheon.map((member, index) => (
            <li key={index} className="house-cards">
              <h3>Name: {member.name}</h3>
              <p>Title: {member.title}</p>
              <p>Info: {member.description}</p>
            </li>
          ))}
        </ul>
    </div>
        
    )
}
export default HouseBaratheon;