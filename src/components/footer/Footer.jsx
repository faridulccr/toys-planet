import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col
                        md={6}
                        className="d-flex align-items-center flex-column"
                    >
                        <div className="text-center">
                            <p>Email: faridulccr@gmail.com</p>
                            <p>Phone: 08996893987</p>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-3"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ms-3"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                    <Col
                        md={6}
                        className="d-flex flex-column align-items-center"
                    >
                        <p className="d-flex align-items-center">
                            &copy; 2023
                            <img
                                className="rounded-circle mx-2"
                                src={logo}
                                alt="logo"
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span className="website-name me-2">
                                Toys-Planet
                            </span>
                            All rights reserved.
                        </p>
                        <p>Designed and developed by Faridul Islam</p>
                        <p>Park Mor, Rangpur, Bangladesh.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
