import React, { useState, useEffect } from "react";
import axios from "axios";
import SettingProps from "./SettingProps";

const cardStyle = {

  maxWidth: "200px",
  padding: "20px",
  border: "20px solid #ddd",
  borderRadius: "5px",
  margin: "10px auto",
  backgroundColor: "black",
  color: "white"
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
      
      <button onClick={handleClick}>Get Random Setting</button>
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