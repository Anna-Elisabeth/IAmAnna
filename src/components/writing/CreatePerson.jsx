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
          <label htmlFor="characterName">Character:</label>
          <input type="text" id="characterName" {...register("characterName", { required: true })} /> 
          <button type="submit">Create Character</button>
        </form>
        <div className="row">{personArray}</div>
      </div>
    </div>
  );
}

export default CreatePerson;