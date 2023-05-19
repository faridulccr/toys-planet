import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Features = () => {
    const featuredCollections = [
        {
            id: 1,
            title: "Racing Legends",
            description:
                "Experience the thrill of racing with our iconic car models.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
        {
            id: 2,
            title: "Off-Road Adventures",
            description:
                "Conquer any terrain with our rugged off-road toy cars.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
        {
            id: 3,
            title: "City Cruisers",
            description:
                "Explore the city streets with our stylish and sleek toy cars.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
        {
            id: 4,
            title: "Monster Trucks",
            description:
                "Get ready for jaw-dropping stunts with our powerful monster trucks.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
        {
            id: 5,
            title: "Classic Cars",
            description:
                "Rediscover the charm of classic cars with our vintage toy car collection.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
        {
            id: 6,
            title: "Formula Racers",
            description:
                "Unleash your inner racer with our high-speed Formula cars.",
            image: "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
        },
    ];

    return (
        <section className="mt-5">
            <Container>
                <h2 className="mb-4 text-center">Featured Collections</h2>
                <Row>
                    {featuredCollections.map((collection) => (
                        <Col key={collection.id} sm={6} md={4}>
                            <Card
                                className="mb-4"
                                data-aos={
                                    collection.id % 2 === 0
                                        ? "flip-up"
                                        : "flip-down"
                                }
                            >
                                <Card.Img
                                    variant="top"
                                    src={collection.image}
                                    alt={collection.title}
                                />
                                <Card.Body>
                                    <Card.Title>{collection.title}</Card.Title>
                                    <Card.Text>
                                        {collection.description}
                                    </Card.Text>
                                    <Button variant="primary">Shop Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
