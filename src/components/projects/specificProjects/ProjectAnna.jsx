import React from 'react';
import { Accordion, AccordionItem } from 'react-bootstrap';
import Anna from "../Anna.jpg";

import "./specificProjects.css";



const ProjectAnna = () => {
    return (
        <div className="backgroundStyle projectContainer">
            <div className="imageContainer">
                <img src={Anna} alt="Jalal Project Image" className="enlarged-img" />
            </div>
            <div className="accordionContainer">
                <Accordion >
                    <AccordionItem eventKey="0">
                        <Accordion.Header ><h2 className="headerStyle"  >Project Remit</h2></Accordion.Header>

                        <Accordion.Body>
                            The project remit was to create a full-stack application all about me. 
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="1">
                        <Accordion.Header><h2 className="headerStyle" >Key Achievements</h2> </Accordion.Header>
                        <Accordion.Body>
                            CSS
                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="2">
                        <Accordion.Header><h2 className="headerStyle" >Challenges and Learnings</h2></Accordion.Header>
                        <Accordion.Body>
                       working alone and in own time - prioritisation
                           

                        </Accordion.Body>
                    </AccordionItem>
                    <AccordionItem eventKey="3">
                        <Accordion.Header><h2 className="headerStyle" >Soft Skills</h2></Accordion.Header>
                        <Accordion.Body>
                           timekeeping
                        </Accordion.Body>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
    );
};

export default ProjectAnna;