import { useState } from 'react';

const Home = (props) => {
const [currentIndex, setCurrentIndex] = useState(0);
const [userMember, setUserMember] = useState([])
const [newMember, setNewMember] = useState({
    name: '',
    title: '',
    description: '',
    house: '',
})
// setNewMember({house:"Rose"})

const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + props.gotFacts.length) % props.gotFacts.length);
}
const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % props.gotFacts.length);
}
const handleSubmit = (event) => {
    event.preventDefault();
    const randomHouseIndex = Math.floor(Math.random() * props.houses.length);
    const assignedHouse = props.houses[randomHouseIndex];
    const addedMember = {...newMember, house: assignedHouse}
    setUserMember([...userMember, addedMember]);
    props.addMemberToHouse(addedMember)
    setNewMember({name: '', title: '', description: '', house: ''})
}
const handleInputChange = (event) => {
    setNewMember({...newMember, [event.target.name]: event.target.value});
};
    return (
        <>
            <h1 className="home-text">Welcome to the Realm of Thrones</h1>
            <p>{props.gotFacts[currentIndex]}</p>
            <button onClick={handlePrevious}>Previous</button><button onClick={handleNext}>Next</button>
            <div className="form-container">
                <h2>Bend the knee! Join a house!</h2>
                <form onSubmit={handleSubmit}>
                    <label name="name">Enter Your Name: </label>
                    <input
                    type="text"
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                    placeholder='Your Name'
                    />
                    <br/>
                    <label name="title">Enter Your Title: </label>
                    <input
                    type="text"
                    name="title"
                    value={newMember.title}
                    onChange={handleInputChange}
                    placeholder='Your Title'
                    />
                    <br/>
                    <label name="description">Your Description: </label>
                    <input
                    type="text"
                    name="description"
                    value={newMember.description}
                    onChange={handleInputChange}
                    placeholder='Your Description'
                    />
                    <br/>
                    <button type="submit">Submit</button> 
                </form>
            </div>
            <div className="new-member-div">
                {userMember.map((member, index) => (
                    <div key={index}>
                        <h3>Name: {member.name}</h3>
                        <p>Title: {member.title}</p>
                        <p>Description: {member.description}</p>
                        <p>House: {member.house.name} {member.house.img}</p>
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Home;