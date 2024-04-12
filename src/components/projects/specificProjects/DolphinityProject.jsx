
import React from 'react';
import { Accordion, AccordionItem } from 'react-bootstrap';

import Dolphinity from "../Dolphinity.png";


import "./specificProjects.css";



const DolphinityProject = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Dolphinity} alt="Rose Project Image" className="enlarged-img" />

            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                            As a team of two, the challenge was to enhance the provided open- source full-stack code (an e-commerce application) by integrating additional features and improvements, aligning with evolving user requirements and industry standards.

                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>

                        Our success as a team of two was contingent upon our  exceptional use of soft skills. 
Through a continuous process of development and feedback within our dynamic duo, we honed our abilities to communicate effectively, collaborate seamlessly, and adapt swiftly to evolving challenges. 
Our commitment to fostering an environment of mutual support and constructive critique enabled us to  work efficiently and refine our solutions iteratively. 

Moreover, our dedication to inclusivity and user experience excellence propelled us to ensure that the code met standard accessibility criteria, enhancing usability for all. Notably, replacing conventional alerts with visually appealing modals showcased our attention to detail and commitment to elevating the application's aesthetic and functional integrity. These achievements underscored the invaluable role of soft skills in driving success, fostering innovation, and delivering exceptional outcomes in our collaborative journey.


                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                        A key challenge related to implementing effective documentation, as we learned to craft comprehensive README files and effective code comments. Embracing the significance of clear documentation, we empowered future developers to seamlessly navigate and understand our codebase. 
Additionally, we grappled with the intricacies of user logic, endeavoring to delineate distinct user types—customers and administrators—within the application. 
Through iterative refinement, we succeeded in implementing robust user logic that catered to the diverse needs of each user category. 
Furthermore, the implementation of Selenium testing posed a formidable challenge, requiring meticulous attention to detail and rigorous testing procedures. Despite the complexities, our perseverance and dedication culminated in the successful completion of Selenium testing, validating the reliability and functionality of our application. Through these challenges, we gleaned invaluable insights, bolstering our expertise and fortifying our resolve to deliver exceptional solutions in the face of adversity.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                        Reflecting on our journey, we recognised the indispensable role of soft skills in bolstering our success throughout the project. Effective communication skills enabled seamless collaboration and facilitated the exchange of ideas, fostering a synergistic partnership. Our ability to empathise and actively listen to one another nurtured a supportive environment where feedback was valued and constructive criticism was embraced. Moreover, our adaptability and resilience empowered us to navigate through challenges with grace, fostering innovation and driving continuous improvement. By cultivating strong interpersonal relationships and prioritising teamwork, we harnessed the collective strengths of our partnership to overcome obstacles and achieve remarkable outcomes.  </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default DolphinityProject;






