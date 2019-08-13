import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Picture from './Picture';

class AboutMe extends React.Component {
    render() {
        return(
            <div style={centerMe} id="about">
                <Fade ssrFadeout>
                    <div>
                        <Picture></Picture>
                    </div>
                    <div>
                        <Jumbotron>
                            <h2>I am an aspiring software developer with interests in Intelligent Health Applications, UX Design, full-stack development, and mobile-systems design.</h2>
                        </Jumbotron>
                    </div>
                </Fade>  
            </div>
        )
    }
}

const centerMe = {
    margin: '0 auto',
    marginTop: '10px',
    display: 'flex'
};
export default AboutMe;