import './CV.css';
import spoon from "./spoon.png";

import image2 from "./image2.jpg";
import '@fortawesome/fontawesome-free/css/all.css';

function CV() {
    return (<div>

        <head>
            <meta className="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>CV</title>
        </head>
        <body>
            <div className="container">

                <div className="top">
                    <div className='imgBx'>
                        <div className="box">
                            <img src={image2} alt="CV Image"></img>

                        </div>
                    </div>

                    <div className='profileText'>
                        <h3> Dr. Anna<br />Wilson<br /><span>Junior Software Engineer</span></h3>
                    </div>
                </div>
                <div className='contentBox'>
                    <div className='leftSide'>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <span className='icon'><i className="fas fa-phone"></i></span>
                                <span className='text'>07536058440</span>
                            </li>
                            <li>
                                <span className='icon'><i className="fas fa-envelope"></i></span>
                                <span className='text'>anna.elisabeth@gmail.com</span>
                            </li>
                            <li>
                                <span className='icon'><i className="fas fa-globe"></i></span>
                                <span className='text'>github.com/Anna-Elisabeth</span>
                            </li>
                            <li>
                                <span className='icon'><i className="fas fa-map-marker"></i></span>
                                <span className='text'>Wolverhampton, UK</span>
                            </li>
                        </ul>
                        <h3>Education</h3>
                        <ul className='education'>
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
                        <h3>Languages</h3>
                        <ul className='language'>

                            <li>
                                <span className='text'>Spanish</span>
                                <span className='percent'>
                                    <div style={{ width: '90%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className='text'>Catalan</span>
                                <span className='percent'>
                                    <div style={{ width: '50%' }}></div>
                                </span>
                            </li>
                            <li>
                                <span className='text'>German</span>
                                <span className='percent'>
                                    <div style={{ width: '70%' }}></div>
                                </span>
                            </li>
                        </ul>
                        <h3>Interests</h3>
                        <ul className='interest'>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Spoons</li>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Cult Leadership</li>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Andrew</li>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Liam</li>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Lucy</li>
                            <li><span className='icon'><img src={spoon} alt="spoon"></img></span>Hats</li>


                        </ul>
                    </div>
                    <div className='rightSide'></div>
                    <div className='about'>
                        <h3>Profile</h3>
                        <p>"Hey there, potential software wrangler! While my experience might be as elusive as a bug in a haystack, my enthusiasm for all things coding knows no bounds. I may not have built the next Facebook or cracked the code to the Matrix (yet), but what I lack in experience, I make up for in sheer determination and a willingness to Google everything.<br /><br /> From wrangling code like a cowboy to juggling JavaScript like a circus performer, I'm ready to take on any software adventure you throw my way. So, whether you need a novice navigator or a daring dabbler in the digital realm, I'm your humble coding companion, eager to learn and ready to dive headfirst into the wild world of software engineering. Let's embark on this coding odyssey together – adventure awaits!" </p>
                    </div>
                    <div className='about'>
                        <h3>Experience</h3>
                        <div className='box'>
                            <div className='yearCompany'>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='yearCompany'>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='yearCompany'>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='yearCompany'>
                                <h5>2019-2023</h5>
                                <h5>Company Name</h5>
                            </div>
                            <div className='text'>
                                <h4>Superduper telephone operator</h4>
                                <p>some very awesome and amazing things I have done in my time here</p>
                            </div>
                        </div>
                    </div>
                    <div className='aboutSkills'>
                        <h3>Professional Skills</h3>
                        <div className='box'>
                            <h4>HTML</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>Javascript</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>CSS
                            </h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>React</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>Java</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>Spring Boot</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                        <div className='box'>
                            <h4>MySQL</h4>
                            <span className='percent'>
                                  <div style={{ width: '95%' }}></div>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>

        </body>
    </div>);
}

export default CV;