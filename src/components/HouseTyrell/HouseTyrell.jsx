import {useState} from 'react';

const HouseTyrell = (props) => {
    // const [show, setShow] = useState(false);

    // const displayHouse = () => {
    //     setShow(!show);
    // }
        return (
        <div id="house-tyrell">
          <h2>House Tyrell</h2>
            <ul>
              {props.tyrell.map((member, index) => (
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
export default HouseTyrell;