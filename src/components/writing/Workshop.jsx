
import PromptGenerator from "./PromptGenerator";
import PromptGenerator2 from "./PromptGenerator2";
import PromptGenerator3 from "./PromptGenerator3";
import Timers from "../writing/Timers/Timers";
import CreateStory from "../writing/Story/CreateStory";

function Workshop() {
    return ( 

        <div style={{ backgroundColor: "#d2eee7", width: "100%", height: "100vh" }}>

<h1>Can you make this story come true?</h1>

<br/>

<h2>On your marks, get set...select your prompts </h2>
<br/>

<PromptGenerator/>
<PromptGenerator2/>
<PromptGenerator3/>
<Timers/>
<CreateStory/>


        </div>
     );
}

export default Workshop;