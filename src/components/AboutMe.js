import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

class AboutMe extends React.Component {
    render() {
        return(
            <div style={centerMe} id="about">
                <Fade ssrFadeout>
                    <Jumbotron>
                        <h2>I am an aspiring software developer with interests in Intelligent Health Applications, UX Design, full-stack development, and mobile-systems design.</h2>
                    </Jumbotron>
                </Fade>  
            </div>
        )
    }
}

const centerMe = {
    width: '80%',
    margin: '0 auto',
    marginTop: '50px'
};
export default AboutMe;