import { useEffect, useState } from "react";
import axios from "axios";

function GetStories() {
  const [challenges, setChallenges] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editStory, setEditStory] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8081/challenge/get")
      .then((response) => {
        setChallenges(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id, story) => {
    setEditing(true);
    setEditId(id);
    setEditStory(story);
    console.log(`Edit story with id: ${id}`);
  };
  const handleSave = async () => {
    try {
      const response = await axios.patch(`http://localhost:8081/challenge/update/${editId}`, { story: editStory });

      if (response.status === 200) {
        const updatedChallenges = challenges.map(challenge =>
          challenge.id === editId ? { ...challenge, story: editStory } : challenge
        );
        setChallenges(updatedChallenges);
      } else {
        console.error("Error updating challenge:", response.data);
      }
    } catch (error) {
      console.error("Error updating challenge:", error);
    }

    setEditing(false);
    setEditId(null);
    setEditStory('');
  };
  const handleDelete = async (id) => {
    try {
      
      const response = await axios.delete(`http://localhost:8081/challenge/delete/${id}`);

      if (response.status === 200 || response.status === 204) {
        // Success! Remove the deleted challenge from the state
        const updatedChallenges = challenges.filter((challenge) => challenge.id !== id);
        setChallenges(updatedChallenges);
      } else {
        console.error("Error deleting challenge:", response.data);
      }
    } catch (error) {
      console.error("Error deleting challenge:", error);
    }
  };

  return (
    <div>
     {editing ? (
        <div>
          <textarea 
          
          style={{
            fontFamily: "Verdana, sans-serif",
            fontSize: '20px',
            width: '100%', // Full width
            height: '200px', // Set height
            padding: '12px 20px', // Padding
            boxSizing: 'border-box', // Make sure padding and width stays inside the box
            border: '2px solid #ccc', // Border
            borderRadius: '4px', // Rounded borders
            backgroundColor: '#f8f8f8', // Background color
            resize: 'none', // Disable resizing
            overflow: 'auto' // Add scroll when content is too long
          }}

          value={editStory} onChange={e => setEditStory(e.target.value)} />
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
          
          onClick={handleSave}>Save</button>
        </div>
      ) : (
       challenges
        .sort((a, b) => a.story.length - b.story.length)
        .map((challenge) => (
          <div
            key={challenge.id}
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Verdana, sans-serif",
              backgroundColor: "#213047",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20px",
              borderRadius: "15px",
              width: "80%",
              boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            {challenge.story}
            <br />
            <button  
            
            style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px', // Add rounded corners 
              }}
  
  onClick={() => handleEdit(challenge.id, challenge.story)}>Edit</button>
            <button 
             style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '5px 10px', 
                borderRadius: '5px', // Add rounded corners 
              }}
            
            onClick={() => handleDelete(challenge.id)}>Delete</button>
          </div>
        )))}
    </div>
  );
}

export default GetStories;