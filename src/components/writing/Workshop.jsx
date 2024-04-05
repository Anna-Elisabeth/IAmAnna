import Timers from "../writing/Timers/Timers";
import Prompt from "./Prompt";

function Workshop() {
    return (
        <div
            style={{
                backgroundColor: "#d2eee7",
                width: "100%",
                height: "100vh",
                border: "1px solid white" // Add thin white border
            }}
        >
            <h1
                className="border border-dark p-4 mb-6 border-5 border-dark rounded"
                aria-label="slogan"
                style={{
                    fontWeight: "bold",
                    color: "white",
                    fontFamily: "Verdana, sans-serif",
                    backgroundColor: "#213047",
                    marginTop: "0px",
                    marginBottom: "80px",
                    margin: "auto", 
                    textAlign: "center", // Center align the text
                }}
            >
                Welcome to the Writing Studio!
            </h1>

           
            <h2 aria-label="on your marks" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047" }} >On your marks, get set...select your prompts:</h2>
            <br />

            <Prompt />

            <Timers />
        </div>
    );
}

export default Workshop;