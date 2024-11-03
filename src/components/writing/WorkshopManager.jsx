import CreateSetting from "./CreateSetting";
import CreateSituation from "./CreateSituation";
import CreatePerson from "./CreatePerson";
import GetStories from "./ManageWriting/GetStories";

function WorkshopManager() {
    return ( <div
        style={{
            backgroundColor: "#d2eee7",
            width: "100%",
            height: "1000vh",
            border: "1px solid white" // Add thin white border
        }}>

<h1
                className="border border-dark p-4 mb-6 border-5 border-dark rounded"
                aria-label="writing management banner"
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
                Prompts and Stories!
            </h1>
            <br/>
            <h2 aria-label="prompt maker" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047" }} >Let's make some new prompts:</h2>
            <br />



<CreateSetting/>
<br></br>

<CreateSituation/>

<br></br>

<CreatePerson/>

<br></br>
<div>
<h2 aria-label="prompt maker" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ marginLeft: "50px", marginTop: "50px", width: "900px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#213047" }} >Story Bank:</h2>

    <GetStories/>
</div>

    </div> );
}

export default WorkshopManager;