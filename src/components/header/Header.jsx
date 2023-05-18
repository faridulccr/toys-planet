import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Account from "./Account";
import ActiveRoute from "./ActiveRoute";
import "./Header.style.scss";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Toys-Planet</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={handleToggle}
                />
                <Navbar.Collapse
                    id="navbar-nav"
                    className={expanded ? "show" : ""}
                >
                    <Nav className="ml-auto">
                        <ActiveRoute to="/">Home</ActiveRoute>
                        <ActiveRoute to="/blog">Blog</ActiveRoute>
                        <ActiveRoute to="/all-toys">All Toys</ActiveRoute>
                        <ActiveRoute to="/contact">Contact</ActiveRoute>
                        <Account />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
