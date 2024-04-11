import Rose from "./Rose.png";
import Cana from "./Cana.png";
import Mega from "./Mega.PNG";
import Dolphinity from "./Dolphinity.png";
import Anna from "./Anna.jpg";

import Jalal from "./Jalal.jpeg";
import styles from './projects.module.css';
import {useNavigate} from "react-router";




function Projects() {

    const navigate =useNavigate();

    return (
        <div className={styles.container}>

            <h1>Awesome projects</h1>


        

            <div className={styles.projectCard}>
                <h2>Jalal</h2>
                <img src={Jalal} alt="Jalal Image"></img>
                <p>
                    Project description goes here...

                </p>
                <button  onClick={() => navigate("/jalal")}> click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Cana</h2>
                <img src={Cana} alt="Cana Image" />
               <p>
          erisque enim ligula venenatis dolor. Maecenas nisl est,
        </p>
                <button  onClick={() => navigate("/cana")}> click to read more</button>

            </div>

            <div className={styles.projectCard}>
                <h2>Thornless Rose</h2>
                <img src={Rose} alt="Rose Image"></img>
                <p>

                    The objective of this project was to ensure the functionality of rendered webpage elements through automated testing. The task required swift completion within a limited timeframe of two days. Our primary goal was to seamlessly integrate Selenium via Eclipse, facilitating comprehensive testing of approximately 80% of the methods or functions incorporated within the project.
                </p>
                <button  onClick={() => navigate("/rose")}> click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Mega...tron</h2>
                <img src={Mega} alt="Megatron Image" />
                <p>Project description goes here...</p>
                <button  onClick={() => navigate("/mega")}> click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>Dolphinity</h2>
                <img src={Dolphinity} alt="Dolphinity Image" />
                <p>Project description goes here...</p>
                <button  onClick={() => navigate("/cana")}> click to read more</button>
            </div>

            <div className={styles.projectCard}>
                <h2>PROJECT Anna</h2>
                <img src={Anna} alt="Project Image" />
                <p>Project description goes here...</p>
                <button  onClick={() => navigate("/anna")}> click to read more</button>
            </div>


            
        </div>

    );
}






export default Projects;