
import {useNavigate} from "react-router";

import Miller from './Miller.PNG';
import './Home.css';


function Home() {

    const navigate =useNavigate();
    return ( 

       
			// <div style={{ backgroundImage: `url(${Miller})`, backgroundPosition: 'center top', backgroundSize: 'cover' }}>

			<div className="background-image"
			style={{
			
				top: 0,
				left: 0,
				width: "100%",
				height: "1800px",
				background: "linear-gradient(to right, #ececec, #9fd3c7)",
				border: "1px solid #d2eee7"
			}}


			
			
			>

<div className="box sb1">I am Anna! Prepare for chaos. Software Engineer with a twist! I bring creativity and a passion for user interfaces to every project. While I may have led my colleagues to a slightly unconventional team-bonding experience (cough, cult, cough), my well-rounded skills and love for all things arty ensure I can tackle any challenge with a unique perspective.</div>

            
            

        
            
<br/>
<br/>       

        
<div className ="row">
        <div className ="col">
	 <div className="book" id="visit_return_button" onClick={() => navigate("/penportrait")}>
    
		<div class="content"> 
			<h3>...Portrait</h3>
		</div>
		<div class="cover"> 
			<figure class="front"> <h1>Pen...</h1> </figure>
			<figure class="back"></figure>
		</div>
	</div>
    </div>
    

   
    
    <div className ="col">
	 <div class="book" onClick={() => navigate("/cv")}>
		<div class="content"> 
			<h3>Fabulous <br/> CV</h3>
		</div>
		<div class="cover"> 
			<figure class="front"> <h1>More About Me</h1> </figure>
			<figure class="back"></figure>
		</div>
	</div>
    </div>


    <div className ="col">
    <div class="book" onClick={() => navigate("/projects")}>
		<div class="content"> 
			<h3>Check<br/> this out</h3>
		</div>
		<div class="cover"> 
			<figure class="front"> <h1>Projects</h1> </figure>
			<figure class="back"></figure>
		</div>
	</div>
    </div>

    
   


    <div className ="col">
	 <div class="book" onClick={() => navigate("/cv")}>
		<div class="content"> 
			<h3>Time<br/> to Write</h3>
		</div>
		<div class="cover"> 
			<figure class="front"> <h1>Let's Create</h1> </figure>
			<figure class="back"></figure>
		</div>
	</div>
    </div>
</div>
 
             
             </div>
     );
}

export default Home;