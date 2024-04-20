import { useEffect, useState } from "react";
import axios from "axios";
import ChallengeProps from "./ChallengeProps";
import { useForm } from "react-hook-form"; 
import Modal from "../Modal";

function CreateStory() {
    const { register, handleSubmit, reset } = useForm(); 
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
  const [challenge, setChallenge] = useState([]);

 
  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data) => {

    console.log(data);
    try {
      const response = await axios.post("http://localhost:8081/challenge/create", data);
      console.log("Story created successfully:", response.data);
      setModalMessage("Story created!");
      setShowModal(true);
      resetForm();
    } catch (err) {
      console.error("Error creating story", err);
      setModalMessage("Error, story not created.");
            setShowModal(true);
    }
  };

   // Fetch existing stories(optional)
   useEffect(() => {
    // Your logic to fetch existing stories(if needed)
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
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
           {showModal && (
                        <Modal
                            open={showModal}
                            onClose={handleModalClose}
                            message={modalMessage}
                        />
                    )}
        </form>
        <div className="row">{challengeArray}</div>
      </div>
    </div>
  );
}

export default CreateStory;