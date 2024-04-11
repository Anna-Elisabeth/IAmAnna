
import React from 'react';
import { Accordion, AccordionItem } from 'react-bootstrap';

import Mega from "../Mega.PNG";
import Mega2 from "../Mega2.png";

import "./specificProjects.css";



const MegaProject = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Mega} alt="Rose Project Image" className="enlarged-img" />
                <img src={Mega2} alt="Rose Project Image" className="enlarged-img" />
            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                        The project remit was to work as a team of two to modernise an existing legacy Java-based application, using a contemporary tech stack to create a new full-stack application. The focus was on enhancing scalability, maintainability, and ensuring excellent  overall performance of the new application.
                             
                             
                               </Accordion.Body>
                   </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>

                        Key achievements in modernising the legacy Java-based application were attained through a combination of meticulous planning, Agile methodologies, and effective collaboration. By conducting thorough analysis and understanding of the unknown legacy code, we navigated complexities and identified opportunities for enhancement. Embracing Agile principles, daily stand-ups facilitated regular progress updates and ensured alignment towards project goals. 

Clear communication channels fostered transparency and minimized misunderstandings, enabling smooth coordination among team members. Additionally, a blend of peer coding sessions and independent research empowered us to address challenges creatively and leverage collective expertise. Through these strategies, we achieved success in transforming the legacy application into a modern, scalable, and high-performing full-stack solution.

                            </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                        Navigating the modernisation process presented a series of challenges that provided invaluable learning experiences for me and my colleague. One significant obstacle was the scarcity of documentation, which hindered our understanding of the legacy system and required us to rely on exploration and some guesswork. Additionally, limited testing resources and lack of access to stakeholders posed challenges in validating requirements and gathering feedback. Addressing knowledge gaps in the new tech stack and managing complex data relationships also proved daunting tasks. However, through perseverance and resilience, we embraced these challenges as opportunities for growth. Accepting our limitations, we fostered a growth mindset that encouraged continuous learning and innovation. Through determination and adaptability, we overcame obstacles and emerged with a deeper understanding of the technology.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                        Soft skills played a pivotal role in navigating the challenges encountered during the modernisation project. Effective communication skills facilitated clear and transparent exchanges, enabling us to address the lack of documentation collaboratively and share insights gained. Additionally, strong interpersonal skills facilitated collaboration and cooperation, empowering us to work through limited testing resources. Moreover, resilience and adaptability allowed us to embrace the knowledge gaps in the new tech stack, fostering a culture of continuous learning and innovation. By cultivating a supportive team environment and encouraging open-mindedness, soft skills enabled us to approach challenges with confidence, perseverance, and a growth mindset, ultimately driving the success of the modernisation endeavour. </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default MegaProject;






