import { useEffect, useState } from "react";
import axios from "axios";
import PersonProps from "./PersonProps";
import { useForm } from "react-hook-form"; // Assuming you use React Hook Form

function CreatePerson() {
    const { register, handleSubmit, reset } = useForm(); 

  const [person, setPersons] = useState([]);

  // Fetch existing persons (optional)
  useEffect(() => {
    // Your logic to fetch existing persons (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8081/person/create", data);
      console.log("Character created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating Character", err);
    }
  };

  const personArray = person.map((person) => (
    <PersonProps key={person.characterName} characterName={person.characterName} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
             style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center",  fontSize: "30px", }}
          htmlFor="characterName">Character:</label>
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
          
          type="text" id="characterName" {...register("characterName", { required: true })} /> 
          <button 
           style={{ 
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px", 
            padding: "10px", 
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
        }} type="submit">Create Character</button>
        </form>
        <div className="row">{personArray}</div>
      </div>
    </div>
  );
}

export default CreatePerson;