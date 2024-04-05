import { useEffect, useState } from "react";
import axios from "axios";
import SettingProps from "./SettingProps";
import { useForm } from "react-hook-form"; // Assuming you use React Hook Form

function CreateSetting() {
    const { register, handleSubmit, reset } = useForm(); 

  const [settings, setSettings] = useState([]);

  // Fetch existing settings (optional)
  useEffect(() => {
    // Your logic to fetch existing settings (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/setting/create", data);
      console.log("Setting created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating setting:", err);
    }
  };

  const settingsArray = settings.map((setting) => (
    <SettingProps key={setting.location} location={setting.location} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="location"
             style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center",  fontSize: "30px", }}
          >Location:</label>
          <input 
           style={{ 
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px", 
            padding: "10px", 
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
        }} 
          type="text" id="location" {...register("location", { required: true })} />
          <button  style={{ 
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px", 
            padding: "10px", 
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
        }} 
          
          type="submit">Create Location</button>
        </form>
        <div className="row">{settingsArray}</div>
      </div>
    </div>
  );
}

export default CreateSetting;