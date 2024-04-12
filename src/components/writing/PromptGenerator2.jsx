import React, { useState, useEffect } from "react";
import axios from "axios";
import SituationProps from "./SituationProps";

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



function PromptGenerator2() {
  const [situations, setSituations] = useState([]);
  const [randomSituation, setRandomSituation] = useState(null);

  useEffect(() => {
    const fetchSituations = async () => {
      try {
        const response = await axios.get("http://localhost:8081/situation/get");
        setSituations(response.data);
      } catch (err) {
        console.error("Error fetching situations:", err);
      }
    };

    fetchSituations();
  }, []);

  const getRandomSituation = () => {
    if (situations.length > 0) {
      const randomIndex = Math.floor(Math.random() * situations.length);
      setRandomSituation(situations[randomIndex]);
    }
  };

  const handleClick = () => {
    getRandomSituation();
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
    Get Random Situation
</button>
      {randomSituation ? (
        <div style={cardStyle}>
          <SituationProps key={randomSituation.scenario} scenario={randomSituation.scenario} />
        </div>
      ) : (
        <p>Loading situations...</p>
      )}
    </div>
  );
}

export default PromptGenerator2;