import { useEffect, useState } from "react";
import axios from "axios";
import ChallengeProps from "./ChallengeProps";
import { useForm } from "react-hook-form"; // Assuming you use React Hook Form

function CreateStory() {
    const { register, handleSubmit, reset } = useForm(); 

  const [challenge, setChallenge] = useState([]);

  // Fetch existing persons (optional)
  useEffect(() => {
    // Your logic to fetch existing persons (if needed)
  }, []);

  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {

    console.log(data);
    try {
      const response = await axios.post("http://localhost:8081/challenge/create", data);
      console.log("Story created successfully:", response.data);
      resetForm();
    } catch (err) {
      console.error("Error creating story", err);
    }
  };

  const challengeArray = challenge.map((challenge) => (
    <ChallengeProps key={challenge.challengeStory} challengeStory={challenge.challengeStory} />
  ));

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="ChallengeStory"
          style={{ marginLeft: "50px", marginTop: "50px", width: "300px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047", textAlign: "center",  fontSize: "30px", }} >
            Create Your Story:</label>
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
          type="text" id="story" {...register("story", { required: true })} />  
          <button type="submit"
          style={{ 
            border: "3px solid #213047", // Thick border with color #213047
            borderRadius: "5px", 
            padding: "10px", 
            fontFamily: "Verdana, sans-serif", // Verdana font
            fontWeight: "bold", // Bold text
            marginLeft: "20px",
            backgroundColor: "white" // White background color
        }} 
          >Create Story</button>
        </form>
        <div className="row">{challengeArray}</div>
      </div>
    </div>
  );
}

export default CreateStory;