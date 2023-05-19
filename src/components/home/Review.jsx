import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Review = () => {
    // Replace the sample data with actual customer reviews
    const customerReviews = [
        {
            id: 1,
            name: "Emily Johnson",
            rating: 4.5,
            photo: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
            comment:
                "My son absolutely loves the toy cars from Toys Planet! The quality is excellent, and they provide endless hours of fun. Highly recommended!",
        },
        {
            id: 2,
            name: "Michael Thompson",
            rating: 5,
            photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            comment:
                "I purchased a set of toy cars for my nephew, and he couldn't be happier. The cars are durable and well-designed. Fantastic product!",
        },
        {
            id: 3,
            name: "Sophia Lee",
            rating: 4,
            photo: "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=600",
            comment:
                "Toys Planet offers a great selection of toy cars. My daughter loves the vibrant colors and different car models. The customer service was also excellent!",
        },
    ];

    return (
        <section className="review-section mt-5">
            <Container>
                <h2 className="text-center fw-bold mb-4 text-white">
                    Customer Reviews
                </h2>
                <Row>
                    {customerReviews.map((review) => (
                        <Col key={review.id} md={4} className="mb-4">
                            <Card
                                data-aos={
                                    review.id % 2 === 0
                                        ? "zoom-in-left"
                                        : "zoom-in-right"
                                }
                            >
                                <Card.Img
                                    style={{ width: "100%", height: "300px" }}
                                    variant="top"
                                    src={review.photo}
                                    alt="Card Image"
                                />
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Rating: {review.rating}
                                    </Card.Subtitle>
                                    <Card.Text>{review.comment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Review;
