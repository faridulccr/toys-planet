import React, { useState } from "react";
import { Button, Card, Col, Row, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cardImage from "../../assets/images/banner.jpg";
import { useAuth } from "../../providers/AuthProvider";

const TabsSection = () => {
    const { currentUser } = useAuth();
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        if (!currentUser) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate(`/single-toy-details/${id}`);
            }, 3000);
        } else {
            navigate(`/single-toy-details/${id}`);
        }
    };
    return (
        <div>
            {showToast && (
                <Toast className="notify-toast">
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body className="fw-bold fs-3">
                        You have to log in first to view details!
                    </Toast.Body>
                </Toast>
            )}
            <h1 className="fw-semibold text-center mb-4">Shop by category</h1>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Truck</Tab>
                    <Tab>Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    <Row>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="fade-right"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button
                                        onClick={() => handleViewDetails(3)}
                                        variant="primary"
                                    >
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="fade-left"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button variant="primary">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel>
                    <Row>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="flip-up"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button variant="primary">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="flip-down"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button variant="primary">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </TabPanel>
                <TabPanel>
                    <Row>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="zoom-in-up"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button variant="primary">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card
                                style={{ width: "90%", margin: "0 auto" }}
                                data-aos="zoom-in-down"
                                className="mb-3 md-mb-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={cardImage}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>Card Name</Card.Title>
                                    <Card.Text>Price: $19.99</Card.Text>
                                    <Card.Text>Rating: 4.5</Card.Text>
                                    <Button variant="primary">
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsSection;
