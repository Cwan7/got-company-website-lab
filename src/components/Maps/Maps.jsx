import { useState } from 'react';

const Maps = (props) => {
    const [show, setShow] = useState(false);
    const displayHouse = () => {
        setShow(!show);
    }

    return (
        <>
        <h2 onClick={displayHouse}>Maps</h2>
        {show && 
            <>
            {props.maps.map((map) => (
                <div key={map.id} className='mapCard'>
                    <h3>{map.name}</h3>
                    <img src={map.imgSrc} alt={map.ingAlt}></img>
                </div>
            ))}
            </>
        }
        </>
    )
}

export default Maps