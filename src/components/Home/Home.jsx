import { useState } from 'react';

const Home = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + props.gotFacts.length) % props.gotFacts.length);
}
const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % props.gotFacts.length);
}
    return (
        <>
            <button onClick={handlePrevious}>Previous</button>
            <h1 className="home-text">Welcome to the Realm of Thrones</h1>
            <p>{props.gotFacts[currentIndex]}</p>
            <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Home;