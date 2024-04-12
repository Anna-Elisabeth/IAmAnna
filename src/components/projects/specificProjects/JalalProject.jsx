import React from 'react';
import { Accordion, AccordionItem } from 'react-bootstrap';
import Jalal from "../Jalal.jpeg";

import "./specificProjects.css";



const JalalProject = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Jalal} alt="Jalal Project Image" className="enlarged-img"/>
            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                            The project remit was to create a front-end application using React.js and JSON for an estate agency. As a team of five, our goal was to construct an internal application catering to the needs of the estate agency, offering a platform to display and manage buyers, sellers and properties.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>
                            One of the key achievements during the project was being nominated to serve as the Scrum Master, which provided an opportunity to lead the team in adopting Agile Methodologies effectively.
                            As Scrum Master, I facilitated the implementation of Agile practices, such as daily stand-up meetings, sprint planning, and retrospectives, ensuring that the team remained focused, organised, and aligned with project goals.
                            Motivating the entire team was another significant accomplishment, as I encouraged collaboration, fostered a positive working environment, and empowered team members to excel in their respective roles. By recognizing and leveraging the unique strengths and talents of each team member, I facilitated a culture of mutual support and growth, allowing individuals to thrive and contribute their best to the project.
                            Additionally, I prioritised the learning journey for the team, providing resources, guidance, and support to enhance skill development and knowledge sharing. This commitment to continuous learning was evidenced by positive feedback from team members, who noted the effectiveness of the learning initiatives and their personal growth throughout the project.
                            As our first ever Software Engineering Project, achieving the Minimum Viable Product (MVP) milestone was a testament to the team's dedication and collaborative efforts. By fostering a sense of camaraderie and making tasks enjoyable through team-building activities and a supportive atmosphere, we not only delivered results but also cultivated a memorable and rewarding experience for everyone involved.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                        During the development of our estate agent application, we encountered several challenges that proved instrumental in shaping our learning journey.
As this was our very first engineering project, we faced a steep learning curve, particularly in mastering the intricacies of React.js and navigating the complexities of front-end development. 
The process of debugging code and troubleshooting errors became a significant learning experience, requiring us to hone our problem-solving skills and adapt to unforeseen obstacles. 
Moreover, integrating new project management tools like Jira introduced us to efficient workflow practices, albeit with a learning curve. 
Simple mistakes, such as overlooking proper naming conventions, often led to prolonged debugging sessions, reinforcing the importance of attention to detail and adherence to best practices. 
Despite these challenges, each hurdle provided valuable insights and opportunities for growth, ultimately contributing to our collective development as software engineers.
                           

                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                            We knew that our teamwork would be most effective if we learnt from each other’s strengths and ensured that each individual could complete the necessary learning.
                            We achieved this through following a Growth Mindset Model.
                            This reduced potential blocks to our learning, pushed us all outside of our comfort zones,  increased resilience and promoted creative problem-solving.
                            We also used peer learning, working closely as a group, taking it in turns to code with support form the remaining group members.
                        </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default JalalProject;