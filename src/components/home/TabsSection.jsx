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
    const [category, setCategory] = useState({});
    const navigate = useNavigate();

    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch(
    //             `${import.meta.env.API_LINK}/api/category`
    //         );
    //         const data = await response.json();
    //         setCategory(data);
    //     };
    //     getData();
    // }, []);

    const handleViewDetails = (id) => {
        if (!currentUser) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate(`/single-toy-details/${id}`);
            }, 2000);
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
            <h1 className="fw-semibold text-center mb-4 text-white">
                Shop by category
            </h1>
            <Tabs>
                <TabList>
                    <Tab>
                        <strong className="text-warning">Sports Car</strong>
                    </Tab>
                    <Tab>
                        <strong className="text-warning">Truck</strong>
                    </Tab>
                    <Tab>
                        <strong className="text-warning">
                            Mini Police Car
                        </strong>
                    </Tab>
                </TabList>

                <TabPanel>
                    <Row>
                        {Array.isArray(category.sports_car) &&
                            category.sports_car.map((car, n) => (
                                <Col key={n} md={6} lg={4}>
                                    <Card
                                        style={{
                                            width: "90%",
                                            margin: "0 auto",
                                        }}
                                        data-aos={
                                            n + (1 % 2) === 0
                                                ? "fade-right"
                                                : "fade-left"
                                        }
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
                                                onClick={() =>
                                                    handleViewDetails(car._id)
                                                }
                                                variant="primary"
                                            >
                                                View Details
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
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
