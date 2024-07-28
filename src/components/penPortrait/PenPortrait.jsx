import styles from './pp.module.css';
import spoon from "./spoon.png";
import image2 from "./image2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

function PenPortrait() {
    return (
        <div>
            <div className={styles.ppPage}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div className={styles.imgBx}>
                            <div className={styles.box}>
                                <img src={image2} alt="CV Image"></img>
                            </div>
                        </div>
                        <div className={styles.profileText}>
                            <h3> Anna Wilson<br /><span>Pen Portrait</span></h3>
                        </div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.leftSide}>
                            <div className={styles.text}>
                                <h3>About Me</h3>
                                <p>Anna joined Lloyds Banking Group in 2018 with a background in academia; her PhD in Theatre, Languages and Cultural Studies was completed at Queen Mary,  The University of London. At work, Anna has progressed from the ground up, embracing  a people-first mentality in each of her roles.Outside of work, she volunteers within the local community and is also active in the local art scene, running writing groups and fostering community engagement through coordinating performance events. Recent collaborations have included projects with WLGBT+ And the British Association of Social Workers.</p>
                            </div>
                            <div className={styles.professionalSkills}>
                                <h3>Current Role</h3>
                                <h5>Software Engineering Reskill</h5>
                                <ul className={styles.text}>
                                    <li>Gained experience in source control and Agile methodologies.</li>
                                    <li>Proactive team member in full stack projects.</li>
                                    <li>HTML, CSS, JavaScript, React JS.</li>
                                    <li>SQL, Java, Spring Boot, Postman, Swagger, Selenium.</li>
                                </ul>
                            </div>
                            <div className={styles.professionalSkills}>
                                <h3>Previous Experience</h3>
                                <h5>Connect, Branch Support, Commercial Banking</h5>
                                <ul className={styles.text}>
                                    <li>Subject matter expert in Connect, providing in-the-moment support and playing key role in training for peers and new starters.</li>
                                    <li>Reshaped process collateral within role as Continuous Improvement Representative.</li>
                                    <li>Improved success measures in CB by challenging status quo, engaging SLT as across-team rep.</li>
                                    <li>Proactively led team meetings to promote inclusive, innovative work environment and ensured complex client issues resolved through collaborative problem-solving.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.text}>
                                <h3>Next Career Steps</h3>
                                <p>Anna is ready to move into a software engineering world where she can grow her creative problem-solving skills.</p>
                            </div>
                            <div className={styles.text}>
                                <h3>Ability</h3>
                                <div className={styles.newBox}>
                                    <div></div>
                                    <div className={styles.text}>
                                        <p>Tenacious, creative hard-worker, frequently praised by colleagues and stakeholders.</p>
                                        <p>Logical thinker with positive mindset, clear communication skills and good teaching capabilities.</p>
                                        <p>As a leader, she ensures all those around her feel comfortable and empowered; her personal success positively correlates directly with that of her team.</p>
                                    </div>
                                </div>
                                <h3>Advocacy</h3>
                                <div className={styles.newBox}>
                                    <div></div>
                                    <div className={styles.text}>
                                        <p>Consistently steps out of comfort zone, Anna takes an inclusive, bold approach in her decision making processes.</p>
                                        <p>Proactive in reaching out where necessary: a quick call to a stakeholder can make all the difference and regularly helps prevent risk events, restore client confidence and build relationships.</p>
                                        <p>Anna actively listens to feedback and goes the extra mile with all of her work interactions so that both clients and colleagues feel heard and valued.</p>
                                    </div>
                                </div>
                                <h3>Ambition</h3>
                                <div className={styles.newBox}>
                                    <div></div>
                                    <div className={styles.text}>
                                        <p>Anna feels confident to take on a junior role in software engineering, where she can contribute creatively and drive to enact positive change.</p>
                                        <p>She is highly motivated to learn independently and to further embed her technical expertise.</p>
                                        <p>She is especially motivated to contribute towards a positive, engaging user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PenPortrait;