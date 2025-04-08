import { useState } from 'react';

const Maps = (props) => {
    return (
        <>
        <h2>Maps</h2>
            <>
            {props.maps.map((map) => (
                <div key={map.id} className='mapCard'>
                    <h3>{map.name}</h3>
                    <img style={{width: '500px'}}src={map.imgSrc} alt={map.ingAlt}></img>
                </div>
            ))}
            </>
        </>
    )
}

export default Maps