
import Cana2 from "../Cana2.PNG";
import "./specificProjects.css";


import { Accordion, AccordionItem } from 'react-bootstrap';

const CanaProject = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Cana2} alt="Cana Project Image" className="enlarged-img" />
            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                            The Project remit was to create a back-end using Spring Boot and MySQL and integrate this into a front-end application of an estate agency application with code written by other engineers. This involved managing Axios requests and updating JSON files with Spring Boot APIs, linked to SQL.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>
                            My most notable achievement during the development of this full-stack project was showing resilience and in the face of unexpected challenges.
                            The project was deisnged to include a team member who had worked on the front-end source code we were writing the back-end for.
                            Their unexpected absense left us working with completely unfamiliar codebase. I remained composed and resourceful, leveraging problem-solving techniques encouraging our team of three to navigate through the codebase systematically.
                            With determination and teamwork, we meticulously dissected each component, unraveling its intricacies to gain a comprehensive understanding. This systematic approach not only empowered us to grasp the nuances of the existing code but also facilitated the seamless integration of our backend solutions. By staying calm, resilient, and focused on our objectives, we transformed adversity into an opportunity for collective growth and collaboration, ultimately achieving success in our project endeavors.
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                            Throughout our project journey, we encountered and surmounted a series of challenges, each contributing to valuable learning experiences. One significant hurdle was the reduction in team size, which necessitated a reevaluation of roles and responsibilities to ensure efficient task allocation and project progress.
                            Additionally, replacing JSON with SQL presented a notable learning curve; while JSON offered flexibility and ease of use in structuring and storing data, migrating to SQL required a fundamental shift in our approach to database management.

                            Another challenge stemmed from gaps in our knowledge base, highlighting the importance of continuous learning and upskilling to address deficiencies and enhance our capabilities.
                            Furthermore, working with an existing codebase that required functionality adjustments posed a unique set of challenges, demanding careful analysis, debugging, and iterative improvements to align the code with project objectives.
                            Through perseverance, collaboration, and a commitment to overcoming obstacles, we not only successfully addressed these challenges but also gleaned invaluable insights and skills that will undoubtedly inform and enrich our future endeavors in software development
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                            The utilisation of soft skills played a pivotal role in navigating the multifaceted challenges encountered throughout our project journey. From effectively managing a reduced team size to seamlessly transitioning between JSON and SQL, our ability to communicate, collaborate, and adapt proved instrumental in overcoming obstacles and achieving our objectives. The cultivation of resilience and problem-solving skills enabled us to remain composed and resourceful in the face of adversity, while fostering a culture of continuous learning empowered us to bridge knowledge gaps and master new technologies. Furthermore, our commitment to clear and concise communication facilitated seamless coordination and alignment among team members, ensuring that everyone remained on the same page and worked towards common goals.
                        </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default CanaProject;
