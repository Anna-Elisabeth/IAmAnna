import React, { useState, useEffect } from "react";
import axios from "axios";
import SettingProps from "./SettingProps";

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




function PromptGenerator() {
  const [settings, setSettings] = useState([]);
  const [randomSetting, setRandomSetting] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("http://localhost:8081/setting/get");
        setSettings(response.data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchSettings();
  }, []);

  const getRandomSetting = () => {
    if (settings.length > 0) {
      const randomIndex = Math.floor(Math.random() * settings.length);
      setRandomSetting(settings[randomIndex]);
    }
  };

  const handleClick = () => {
    getRandomSetting();
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
    Get Random Setting
</button>
      {randomSetting ? (
        <div style={cardStyle}>
          <SettingProps key={randomSetting.location} location={randomSetting.location} />
        </div>
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
}

export default PromptGenerator;