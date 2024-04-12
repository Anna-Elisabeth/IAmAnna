import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonProps from "./PersonProps";

const cardStyle = {
  maxWidth: "200px",
  padding: "20px",
  border: "20px solid #1D2E4A",
  borderRadius: "5px",
  margin: "10px auto",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Verdana, sans-serif",
  fontSize: "30px"
};


function PromptGenerator3() {
  const [person, setPersons] = useState([]);
  const [randomPerson, setRandomPerson] = useState(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get("http://localhost:8081/person/get");
        setPersons(response.data);
      } catch (err) {
        console.error("Error fetching persons:", err);
      }
    };

    fetchPersons();
  }, []);

  const getRandomPerson = () => {
    if (person.length > 0) {
      const randomIndex = Math.floor(Math.random() * person.length);
      setRandomPerson(person[randomIndex]);
    }
  };

  const handleClick = () => {
    getRandomPerson();
  };

  return (
    <div>
      
      
      <button 
    style={{ 
        border: "3px solid #213047", // Thick border with color #213047
        borderRadius: "5px", 
        padding: "10px", 
        fontFamily: "Verdana, sans-serif", // Verdana font
        fontWeight: "bold", // Bold text
        marginLeft: "20px",
        backgroundColor: "white" // White background color
    }} 
    onClick={handleClick}
>
    Get Random Character
</button>
      {randomPerson ? (
        <div style={cardStyle}>
          <PersonProps key={randomPerson.characterName} characterName={randomPerson.characterName} />
        </div>
      ) : (
        <p>Loading characters...</p>
      )}
    </div>
  );
}

export default PromptGenerator3;