import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal';

class Skills extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pythonProgress: 0,
            webProgress: 0,
            cProgress: 0,
            dbProgress: 0,
        };
    }


    render() {
        const { pythonProgress, webProgress, cProgress, dbProgress } = this.state;
        return(
            <div style={{margin: '0 auto', width: '100%' }} id="skills">
                <Fade>
                <h2 style={{ margin: '25px' }}>Skills</h2>
                <Container style={{margin: '25px'}}>
                    <Row style={{alignItems: 'center'}}>
                        <Col xs={3}><h4>Python / Java / C#</h4></Col>
                        <Col sm={8}><ProgressBar now={pythonProgress} label={'Experienced'} /></Col>    
                    </Row>
                    <Row style={{alignItems: 'center'}}>
                        <Col xs={3}><h4>HTML / CSS / JS</h4></Col>
                        <Col sm={8}><ProgressBar now={webProgress} label={'Proficient'} /></Col>    
                    </Row> 
                    <Row style={{alignItems: 'center'}}>
                        <Col xs={3}><h4>C / C++ / Swift</h4></Col>
                        <Col sm={8}><ProgressBar now={cProgress} label={'Classroom'} /></Col>    
                    </Row> 
                    <Row style={{alignItems: 'center'}}>
                        <Col xs={3}><h4>SQL / mySQL</h4></Col>
                        <Col sm={8}><ProgressBar now={dbProgress} label={'Comfortable'} /></Col>    
                    </Row>     
                </Container> 
                </Fade> 
            </div>
        );
    }

    async componentDidMount() {
        setInterval(() => {
            this.setState({
                pythonProgress: 90,
                webProgress: 75,
                cProgress: 60,
                dbProgress: 50,
            })
        }, 1000)
    }

}
export default Skills;