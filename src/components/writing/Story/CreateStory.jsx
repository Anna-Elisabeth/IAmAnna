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
          <label htmlFor="ChallengeStory">Story:</label>
          <input type="text" id="story" {...register("story", { required: true })} />  
          <button type="submit">Create Story</button>
        </form>
        <div className="row">{challengeArray}</div>
      </div>
    </div>
  );
}

export default CreateStory;