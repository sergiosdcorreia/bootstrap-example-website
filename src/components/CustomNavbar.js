import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">sergiocorreia</Link>
                    </Navbar.Brand>
                    <Navbar.Toogle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} component= {Link} href="/" to="/">
                            Home
                        </NavItem>

                        <NavItem eventKey={2} component= {Link} href="/about" to="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} component= {Link} href="/news" to="/news">
                            News
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}