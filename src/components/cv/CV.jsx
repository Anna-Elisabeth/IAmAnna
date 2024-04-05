import styles from './cv.module.css';
import spoon from "./spoon.png";

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
                                <span className={styles.icon}><i className = "fas fa-phone"></i></span>
                                <span className={styles.text}>07536058440</span>
                            </li>
                            <li>
                                <span className={styles.icon}><i className="fas fa-envelope"></i></span>
                                <span className={styles.text}>anna.elisabeth@gmail.com</span>
                            </li>
                            <li>
                                <span className={styles.icon}><i className="fas fa-globe"></i></span>
                                <span className={styles.text}>github.com/Anna-Elisabeth</span>
                            </li>
                            <li>
                                <span className={styles.icon}><i className="fas fa-map-marker"></i></span>
                                <span className={styles.text}>Wolverhampton, UK</span>
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
                    <div style={{ width: '95%' }}></div>
                </span>
            </li>
            <li>
                <h4>JavaScript</h4>
                <span className={styles.percent}>
                    <div style={{ width: '95%' }}></div>
                </span>
            </li>
            <li>
                <h4>Java</h4>
                <span className={styles.percent}>
                    <div style={{ width: '95%' }}></div>
                </span>
            </li>
            <li>
                <h4>Spring Boot</h4>
                <span className={styles.percent}>
                    <div style={{ width: '95%' }}></div>
                </span>
            </li>
            <li>
                <h4>SQL</h4>
                <span className={styles.percent}>
                    <div style={{ width: '95%' }}></div>
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
                                <div style={{ width: '50%' }}></div>
                            </span>
                        </li>
                        <li>
                            <span className={styles.text}>Being Awesome</span>
                            <span className={styles.percent}>
                                <div style={{ width: '70%' }}></div>
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
                    <ul className= {styles.interest}>
                        <li><span className={styles.icon}><img src={spoon} alt="spoon"></img></span>Cooking</li>
                        <li><span className={styles.icon}><img src={spoon} alt="spoon"></img></span>Writing</li>
                        <li><span className={styles.icon}><img src={spoon} alt="spoon"></img></span>Performance</li>
                        <li><span className={styles.icon}><img src={spoon} alt="spoon"></img></span>Volunteering</li>



                    </ul>
                </div>
                <div className={styles.rightSide}>
    <div className={styles.profile}>
        <h3>Profile</h3>
        <p>"Hey there, potential software wrangler! While my experience might be as elusive as a bug in a haystack, my enthusiasm for all things coding knows no bounds.
            I may not have built the next Facebook or cracked the code to the Matrix (yet), but what I lack in experience,
            I make up for in sheer determination and a willingness to Google everything."
            <br /> </p>
    </div>

    

                <div className={styles.experience}>
                        <h3>Experience</h3>
                        <div className={styles.newBox} >
                            <div className={styles.yearCompany}>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className={styles.text}>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className={styles.newBox} >
                            <div className={styles.yearCompany}>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className={styles.text}>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className={styles.newBox} >
                            <div className={styles.yearCompany}>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className={styles.text}>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className={styles.newBox} >
                            <div className={styles.yearCompany}>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className={styles.text}>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
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