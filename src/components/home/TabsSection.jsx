import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useAuth } from "../../providers/AuthProvider";

const TabsSection = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [category, setCategory] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_LINK}/api/product-category`
                );
                const data = await response.json();
                // console.log(data);
                setCategory(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        getData();
    }, []);

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
                        {!loading &&
                            Array.isArray(category.sports_cars) &&
                            category.sports_cars.map((car, n) => (
                                <Col key={n} md={6}>
                                    <Card
                                        style={{
                                            width: "90%",
                                            margin: "0 auto",
                                        }}
                                        data-aos={
                                            (n + 1) % 2 === 0
                                                ? "fade-right"
                                                : "fade-left"
                                        }
                                        className="mb-3 md-mb-0"
                                    >
                                        <Card.Img
                                            className="card-img"
                                            variant="top"
                                            src={car.image}
                                            alt="Card Image"
                                        />
                                        <Card.Body>
                                            <Card.Title>{car.name}</Card.Title>
                                            <Card.Text>
                                                Price: ${car.price}
                                            </Card.Text>
                                            <Card.Text>
                                                Rating: {car.rating}/5
                                            </Card.Text>
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
                        {!loading &&
                            Array.isArray(category.trucks) &&
                            category.trucks.map((car, n) => (
                                <Col key={n} md={6}>
                                    <Card
                                        style={{
                                            width: "90%",
                                            margin: "0 auto",
                                        }}
                                        data-aos={
                                            (n + 1) % 2 === 0
                                                ? "fade-right"
                                                : "fade-left"
                                        }
                                        className="mb-3 md-mb-0"
                                    >
                                        <Card.Img
                                            className="card-img"
                                            variant="top"
                                            src={car.image}
                                            alt="Card Image"
                                        />
                                        <Card.Body>
                                            <Card.Title>{car.name}</Card.Title>
                                            <Card.Text>
                                                Price: ${car.price}
                                            </Card.Text>
                                            <Card.Text>
                                                Rating: {car.rating}/5
                                            </Card.Text>
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
                        {!loading &&
                            Array.isArray(category.police_cars) &&
                            category.police_cars.map((car, n) => (
                                <Col key={n} md={6}>
                                    <Card
                                        style={{
                                            width: "90%",
                                            margin: "0 auto",
                                        }}
                                        data-aos={
                                            (n + 1) % 2 === 0
                                                ? "fade-right"
                                                : "fade-left"
                                        }
                                        className="mb-3 md-mb-0"
                                    >
                                        <Card.Img
                                            className="card-img"
                                            variant="top"
                                            src={car.image}
                                            alt="Card Image"
                                        />
                                        <Card.Body>
                                            <Card.Title>{car.name}</Card.Title>
                                            <Card.Text>
                                                Price: ${car.price}
                                            </Card.Text>
                                            <Card.Text>
                                                Rating: {car.rating}/5
                                            </Card.Text>
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
            </Tabs>
        </div>
    );
};

export default TabsSection;
