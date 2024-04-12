import PromptGenerator from "./PromptGenerator";
import PromptGenerator2 from "./PromptGenerator2";
import PromptGenerator3 from "./PromptGenerator3";

function Prompt() {
    return ( 

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>


<PromptGenerator/>
<PromptGenerator2/>
<PromptGenerator3/>

        </div>
     );
}

export default Prompt;