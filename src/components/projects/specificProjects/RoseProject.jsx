
import React from 'react';
import { Accordion, AccordionItem } from 'react-bootstrap';
import Rose from "../Rose.png";

import "./specificProjects.css";



const RoseProject = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Rose} alt="Rose Project Image" className="enlarged-img" />
            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                            The project involved testing a full-stack application under intense time constraints, with only a two-day window for completion. Our task was to validate the functionality of an estate agent application, comprising a React front end and a Spring Boot back end, utilising Selenium.  </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>
                            Throughout the project, my key achievements were rooted in maintaining composure under pressure and fostering a culture of continuous learning within the team. Despite tight deadlines and unfamiliar territory, I remained calm and focused, ensuring efficient progress even in challenging circumstances. Embracing the steep learning curve of utilising Selenium, which was very new to me, I swiftly adapted, demonstrating adaptability and resilience. Moreover, I encouraged and motivated team members to embrace the learning curve, fostering an environment of collaboration and growth. By prioritizing learning and resilience, I not only achieved success in utilising new tools but also empowered the team to navigate unfamiliar territory with confidence and determination. </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                            Throughout the project, we encountered various challenges that provided valuable learning opportunities. One significant hurdle we faced was the inconsistency in CSS selectors, particularly when dealing with tests involving cards and buttons. This inconsistency made it challenging to complete tests efficiently and accurately.
                            To overcome this obstacle, we had to explore and implement different wait techniques, such as implicit and explicit waits, to ensure stable and reliable test execution.
                            Additionally, with tight time constraints, we learned the importance of prioritisation, focusing our efforts on critical tests while effectively managing our resources.
                            Collaboratively, we identified and leveraged each team member's strengths, delegating tasks accordingly to optimise productivity and problem-solving. Through these challenges, we gained insights into effective test automation strategies and honed our teamwork skills, ultimately enhancing our capabilities as software testers.

                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                            In navigating the complexities of our project, we demonstrated strong use of soft skills. Communication and collaboration were pivotal in ensuring seamless coordination among team members, enabling us to effectively tackle challenges. Adaptability and resilience proved essential in overcoming unexpected hurdles, allowing us to pivot and find innovative solutions amidst uncertainty. Additionally, leadership and empathy fostered a supportive team environment, empowering each member to contribute their unique strengths and perspectives. By embracing these soft skills, we fostered a culture of mutual respect, continuous learning, and collective success, ultimately driving the project forward with confidence and cohesion. </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default RoseProject;






