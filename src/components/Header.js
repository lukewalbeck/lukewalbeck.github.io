import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

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
                            <Nav.Link href="#food">Food</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
                    );
                }
            }
export default Header;