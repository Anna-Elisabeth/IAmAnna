

import { useEffect, useState } from "react";
import axios from "axios";
import SituationProps from "./SituationProps";
import { useForm } from "react-hook-form"; 

function CreateSituation() {
  const { register, handleSubmit, reset } = useForm();

  const [situations, setSituations] = useState([]);

  // Fetch existing situations (optional)
  useEffect(() => {
    // Your logic to fetch existing situation (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };




  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/situation/create", data);
      console.log("Situation created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating situation:", err);
    }
  };

  const situationsArray = situations.map((situation) => (
    <SituationProps key={situation.scenario} scenario={situation.scenario} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label 
             style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center",  fontSize: "30px", }}
          
          htmlFor="scenario">Scenario:</label>
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
          
          type="text" id="scenario" {...register("scenario", { required: true })}/>
          <button
           style={{ 
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px", 
            padding: "10px", 
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
        }}  type="submit">Create Scenario</button>
        </form>
        <div className="row">{situationsArray}</div>
      </div>
    </div>
  );
}

export default CreateSituation;