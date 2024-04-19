import { useEffect, useState } from "react";
import axios from "axios";

function GetStories() {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/challenge/get')
            .then(response => {
                setChallenges(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {challenges.sort((a, b) => a.story.length - b.story.length).map(challenge => (
                <div key={challenge.id} style={{
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
                    width: "80%", // Set a width for the card
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)", // Add some shadow for a card-like effect
                    textAlign: "center", // Center align the text
                }}>
                    {challenge.story}
                </div>
            ))}
        </div>
    );
}

export default GetStories;