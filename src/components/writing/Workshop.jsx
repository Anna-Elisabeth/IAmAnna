
import PromptGenerator from "./PromptGenerator";
import PromptGenerator2 from "./PromptGenerator2";
import PromptGenerator3 from "./PromptGenerator3";

function Workshop() {
    return ( 

        <div style={{ backgroundColor: '#f0d9da' }}>

<h1>Can you make this story come true?</h1>

<br/>

<h2>On your marks, get set...select your prompts </h2>
<br/>

<PromptGenerator/>
<PromptGenerator2/>
<PromptGenerator3/>


        </div>
     );
}

export default Workshop;