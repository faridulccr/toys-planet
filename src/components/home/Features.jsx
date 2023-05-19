import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Features = () => {
    const featuredCollections = [
        {
            id: 1,
            title: "Racing Legends",
            description:
                "Experience the thrill of racing with our iconic car models.",
            image: "https://cdn11.bigcommerce.com/s-cpuexkide6/images/stencil/1280x1280/products/1639/16265/Cars-Thomasville-JacksonStorm-FVF36-Main__61588.1677447819.jpg?c=2",
        },
        {
            id: 2,
            title: "Off-Road Adventures",
            description:
                "Conquer any terrain with our rugged off-road toy cars.",
            image: "https://m.media-amazon.com/images/I/81XzFRf4v6L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 3,
            title: "City Cruisers",
            description:
                "Explore the city streets with our stylish and sleek toy cars.",
            image: "https://m.media-amazon.com/images/I/51J8BANHS3L.jpg",
        },
        {
            id: 4,
            title: "Monster Trucks",
            description:
                "Get ready for jaw-dropping stunts with our powerful monster trucks.",
            image: "https://rukminim1.flixcart.com/image/416/416/xif0q/remote-control-toy/v/2/g/rock-crawler-rc-monster-truck-4wd-off-road-vehicle-multicolor-3-original-imafvhr45wdh2pry.jpeg?q=70",
        },
        {
            id: 5,
            title: "Classic Cars",
            description:
                "Rediscover the charm of classic cars with our vintage toy car collection.",
            image: "https://sc04.alicdn.com/kf/H9dc01247dae24d14a4267d5c19bb129fU.png",
        },
        {
            id: 6,
            title: "Formula Racers",
            description:
                "Unleash your inner racer with our high-speed Formula cars.",
            image: "https://m.media-amazon.com/images/I/71uxuU0LEzL._SL1500_.jpg",
        },
    ];

    return (
        <section className="mt-5">
            <Container>
                <h2 className="mb-4 text-center text-white fw-bold">
                    Featured Collections
                </h2>
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
                                    className="card-img"
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
