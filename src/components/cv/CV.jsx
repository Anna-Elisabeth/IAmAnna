import styles from './cv.module.css';
import spoon from "./spoon.png";
import pen from "./pen.PNG";
import Acting from "./Acting.PNG";
import helping from "./helping.PNG";

import image2 from "./image2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

function CV() {
    return (<div>

        {/* <head>
            <meta className="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>CV</title>
        </head> */}
        {/* <body> */}
        <div className={styles.cvPage}>
            <div className={styles.container}>

                <div className={styles.top}>
                    <div className={styles.imgBx}>
                        <div className={styles.box}>
                            <img src={image2} alt="CV Image"></img>

                        </div>
                    </div>

                    <div className={styles.profileText}>
                        <h3> Dr. Anna E.<br />Wilson<br /><span>Junior Software Engineer</span></h3>
                    </div>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.leftSide}>
                        <div className={styles.contactInfo}>
                            <h3>Contact Info</h3>
                            <ul>
                                <li>
                                    <span className={styles.icon}><i className="fas fa-phone"></i></span>
                                    <span className={styles.text}>07536058440</span>
                                </li>
                                <li>
                                    <span className={styles.icon}><i className="fas fa-envelope"></i></span>
                                    <a href="mailto:anna.elisabeth@gmail.com">
                                        <span className={styles.text}>anna.elisabeth@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <span className={styles.icon}><i className="fas fa-globe"></i></span>
                                    <a href="https://github.com/Anna-Elisabeth" target="_blank" rel="noopener noreferrer">
                                        <span className={styles.text}>github.com/Anna-Elisabeth</span>
                                    </a>

                                </li>
                                <li>
                                    <span className={styles.icon}><i className="fas fa-map-marker"></i></span>
                                    <a href="https://www.google.com/maps?q=Wolverhampton,+UK" target="_blank" rel="noopener noreferrer">
  <span className={styles.text}>Wolverhampton, UK</span>
</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.professionalSkills}>
                            <h3>Professional Skills</h3>
                            <ul className={styles.skills}>
                                <li>
                                    <h4>HTML</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '95%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>CSS</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '75%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>JavaScript</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '70%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>React</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '80%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>Java</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '55%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>Spring Boot</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '60%' }}></div>
                                    </span>
                                </li>
                                <li>
                                    <h4>SQL</h4>
                                    <span className={styles.percent}>
                                        <div style={{ width: '70%' }}></div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <h3>Skills</h3>
                        <ul className={styles.language}>

                            <li>
                                <span className={styles.text}>Communication</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '90%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className={styles.text}>Problem-solving</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '89%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className={styles.text}>Attention to detail</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '80%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className={styles.text}>Curiosity</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '89%' }}></div>
                                </span>
                            </li>
                        </ul>
                        <div className={styles.education}>
                            <h3>Education</h3>
                            <ul className={styles.education}>
                                <li>
                                    <h5>2014</h5>
                                    <h4>PhD in Drama & Languages</h4>
                                    <h6>Queen Mary, University of London</h6>
                                </li>
                                <li>
                                    <h5>2009</h5>
                                    <h4>MPhil in Cultural Inquiry</h4>
                                    <h6>University of Birmingham</h6>
                                </li>
                                <li>
                                    <h5>2007</h5>
                                    <h4>BA in Hispanic Studies(1st)</h4>
                                    <h6>University of Birmingham</h6>
                                </li>
                            </ul>
                        </div>

                        <h3>Languages</h3>
                        <ul className={styles.language}>

                            <li>
                                <span className={styles.text}>Spanish</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '100%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className={styles.text}>Catalan</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '50%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className={styles.text}>German</span>
                                <span className={styles.percent}>
                                    <div style={{ width: '70%' }}></div>
                                </span>
                            </li>
                        </ul>
                        <h3>Interests</h3>
                        <ul className={styles.interest}>
                            <li><span className={styles.icon}><img src={spoon} alt="spoon"></img></span>Cooking</li>
                            <li><span className={styles.icon}><img src={pen} alt="pen"></img></span>Writing</li>
                            <li><span className={styles.icon}><img src={Acting} alt="spoon"></img></span>Performance</li>
                            <li><span className={styles.icon}><img src={helping} alt="spoon"></img></span>Volunteering</li>



                        </ul>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.profile}>
                            <h3>Profile</h3>
                            <h5>Aspiring software engineer with a passion for creative problem-solving. Thrives in collaborative environments and is also proactive in seeking out independent development opportunities. Eager to learn from experienced engineers and to contribute fresh ideas to innovative software solutions.
                                <br /> </h5>
                        </div>



                        <div className={styles.experience}>
                            <h3>Experience</h3>
                            <div className={styles.newBox} >
                                <div className={styles.yearCompany}>
                                    <h5>Nov 2023 - May 2024</h5>
                                    <h5>LBG</h5>
                                </div>
                                <div className={styles.text}>
                                    <h4>Software Engineering Reskill</h4>
                                    <p>Six month full-stack  bootcamp </p>
                                    <p>Individual and group projects completed and presented to Stakeholders</p>
                                    <p>Agile methodology applied and experience gained as Scrum Master</p>
                                </div>
                            </div>
                            <div className={styles.newBox} >
                                <div className={styles.yearCompany}>
                                    <h5>Jan 2020 - Nov 2023</h5>
                                    <h5>LBG</h5>
                                </div>
                                <div className={styles.text}>
                                    <h4>Commercial Client Servicing</h4>
                                    <p>Provision of excellent account servicing</p>
                                    <p>Problem-solving tasks for clients</p>
                                    <p>Team well-being and CI rep</p>
                                </div>
                            </div>
                            <div className={styles.newBox} >
                                <div className={styles.yearCompany}>
                                    <h5>Jul 2019 - Jan 2020</h5>
                                    <h5>LBG</h5>
                                </div>
                                <div className={styles.text}>
                                    <h4>Colleague Support Team</h4>
                                    <p>Assitance to branch staff and other colleagues</p>
                                    <p>Escalation point for system queries and guidance</p>
                                    <p>Establishing relationships with stakeholders</p>

                                </div>
                            </div>
                            <div className={styles.newBox} >
                                <div className={styles.yearCompany}>
                                    <h5>Jan 2018 - Jul 2019</h5>
                                    <h5>LBG</h5>
                                </div>
                                <div className={styles.text}>
                                    <h4>Connect Customer Advisor</h4>
                                    <p>Personal banking query resolution in current, savings, credit cards and online teams</p>
                                    <p>SME, training and supervisory roles</p>
                                </div>
                            </div>
                            <div className={styles.newBox} >
                                <div className={styles.yearCompany}>
                                    <h5>Prior to 2018</h5>
                                    <h5>Various roles outside of LBG in date order</h5>
                                </div>
                                <div className={styles.text}>
                                    <h4> Office administration, community support work, university  lecturing and supervision, language transcription of academic texts and interviews</h4>
                                    

                                </div>
                            </div>

                            
                        <div className={styles.profile}>
                            <h3>References</h3>
                           
                               
                            <p>Available on request</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
         </div>

        {/* </body> */}
    </div>);
}

export default CV;