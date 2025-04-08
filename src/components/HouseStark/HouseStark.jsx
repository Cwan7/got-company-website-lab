import {useState} from 'react';

const HouseStark = (props) => {
    // const [show, setShow] = useState(false);

    // const displayHouse = () => {
    //     setShow(!show);
    // }
        return (
    <div>
          <h2>House Stark</h2>
            <ul>
              {props.starks.map((member, index) => (
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
export default HouseStark;