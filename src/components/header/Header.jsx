import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";
import Account from "./Account";
import ActiveRoute from "./ActiveRoute";
import "./Header.style.scss";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" id="header">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img src={logo} alt="logo" id="logo" />
                    <span className="website-name">Toys-Planet</span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={handleToggle}
                />
                <Navbar.Collapse
                    id="navbar-nav"
                    className={expanded ? "show" : ""}
                >
                    <Nav>
                        <ActiveRoute to="/">Home</ActiveRoute>
                        <ActiveRoute to="/all-toys">All Toys</ActiveRoute>
                        <ActiveRoute to="/blogs">Blogs</ActiveRoute>
                        <Account />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
