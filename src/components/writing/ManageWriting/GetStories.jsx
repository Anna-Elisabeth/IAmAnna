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
            {challenges.map(challenge => (
                
                <div key={challenge.id} style={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: "Verdana, sans-serif",
                    backgroundColor: "#213047",
                    marginTop: "0px",
                    marginBottom: "80px",
                    margin: "auto", 
                    textAlign: "center", // Center align the text
                }}>
                    {challenge.story}
                </div>
            ))}
        </div>
    );
}

export default GetStories;