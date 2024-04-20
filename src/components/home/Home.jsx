
import {useNavigate} from "react-router";


import './Home.css';
import AnnaHome from "./AnnaHome.png";

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

<div className="container">
  <div className="row">
    <div className="box col">
      <div className="sb1">Hello there! <br/>
        I'm Anna – an aspiring software engineer, creative writer, performer, and ponderous thinker. <br/>Welcome to my corner of the web!
      </div>
    </div>
    <div className="oval-container col">
      <img src={AnnaHome} alt="Anna Home Image" className="image" />
    </div>
  </div>
</div>

            
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
	 <div class="book" onClick={() => navigate("/workshop")}>
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