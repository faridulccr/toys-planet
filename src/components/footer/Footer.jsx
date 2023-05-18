import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.style.scss";

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                    <Col md={6} className="text-center text-md-left">
                        <p>
                            &copy; 2023{" "}
                            <span className="website-name"> Toys-Planet </span>.
                            All rights reserved.
                        </p>
                        <p>Designed and developed by Faridul Islam</p>
                    </Col>
                    <Col
                        md={6}
                        className="d-flex align-items-center justify-content-center"
                    >
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
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
