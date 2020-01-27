import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resume from '../media/LukeWalbeckResume.pdf'

class Header extends React.Component {
    render() {
        return (
            <div id="home">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Lucas Walbeck</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href={resume} target="_blank">Resume</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link  href="https://github.com/lukewalbeck" target="_blank">                            
                                <Button variant="outline-light"><FontAwesomeIcon icon={['fab', 'github']}/></Button>
                            </Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/lucas-walbeck/" target="_blank">
                                <Button variant="outline-light"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></Button>
                            </Nav.Link>
                            <Nav.Link href="mailto:lukewalbeck@gmail.com" target="_blank">
                            <Button variant="outline-light"><FontAwesomeIcon icon='envelope'/></Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
                    );
                }
            }
export default Header;