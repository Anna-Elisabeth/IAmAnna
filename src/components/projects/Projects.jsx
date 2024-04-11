import Rose from "./Rose.png";
import Cana2 from "./Cana2.PNG";
import Mega from "./Mega.PNG";
import Dolphinity from "./Dolphinity.png";
import Jalal from "./Jalal.jpeg";
import Anna from "./Anna.jpg";
import styles from './projects.module.css';
import {useNavigate} from "react-router";




function Projects() {

    const navigate =useNavigate();

    return (
        <div className={styles.container}>

            <h1 className= {styles.title}>Awesome Projects</h1>


        

            <div className={styles.projectCard}>
                <h2>Jalal</h2>
                <img src={Jalal} alt="Jalal Image"></img>
                <p>
                   Front-end Estate Agency application...

                </p>
                <button className={styles.customButton} onClick={() => navigate("/jalal")}> Click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Cana</h2>
                <img src={Cana2} alt="Cana Image" />
               <p>
          Back-end project using Spring Boot and MySQL...
        </p><br/>
                <button className={styles.customButton} onClick={() => navigate("/cana")}> Click to read more</button>

            </div>

            <div className={styles.projectCard}>
                <h2>Thornless Rose</h2>
                <img src={Rose} alt="Rose Image"></img>
                <p>
Testing full-stack application using Selenium...
                    </p>
                <button  className={styles.customButton} onClick={() => navigate("/rose")}> Click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Mega...tron</h2>
                <img src={Mega} alt="Megatron Image" />
                <p>Legacy code transformation...</p>
                <button className={styles.customButton}  onClick={() => navigate("/mega")}> Click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Dolphinity</h2>
                <img src={Dolphinity} alt="Dolphinity Image" />
                <p>Open Source Project challenge...</p>
                <button className={styles.customButton}  onClick={() => navigate("/dolphinity")}> Click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>PROJECT Anna</h2>
                <img src={Anna} alt="Project Image" />
                <p>Personal Project all about me...</p>
                <button className={styles.customButton}  onClick={() => navigate("/anna")}> Click to read more</button>
            </div>


            
        </div>

    );
}






export default Projects;