import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Projects from './Projects';


class ProjectJump extends React.Component {
    render() {
        return(
            <div>
                <Jumbotron>
                    <h2>Projects</h2>
                    <hr/>
                    <p>
                        Here are a list of my projects that I have worked on or are still working on,
                        with their individual github links. 
                    </p>
                    <p>    
                        This inforamtion is generated from the Django
                        REST back-end that I have been developing, so it should be the most up-to-date information
                        regarding my showcase of projects.
                    </p>
                </Jumbotron>


                <Projects apiCall="/projects/"/>
            </div>
        );
    }
}
export default ProjectJump;