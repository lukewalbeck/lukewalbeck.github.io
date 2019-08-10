import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Lucas Walbeck</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
                    )
                }
            }
export default Header;