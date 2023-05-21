import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const {
        image,
        name,
        seller,
        email,
        price,
        rating,
        availableQuantity,
        description,
    } = data;

    return (
        <div className="background py-5">
            <Container>
                <h2 className="text-center text-white fw-bold mb-4">
                    View Details
                </h2>
                <Card className="toy-banner">
                    <Row>
                        <Col md={7}>
                            <Card.Img variant="top" src={image} />
                        </Col>
                        <Col md={5} className="d-flex align-items-center ps-4">
                            <Card.Body>
                                <Card.Title>Name: {name}</Card.Title>
                                <Card.Text>
                                    <strong>Seller:</strong> {seller}df
                                    <br />
                                    <strong>Email:</strong> {email}
                                    <br />
                                    <strong>Price:</strong> ${price}
                                    <br />
                                    <strong>Rating:</strong> {rating}/5
                                    <br />
                                    <strong>Quantity:</strong>
                                    {availableQuantity}
                                    <br />
                                    <strong>Description:</strong> {description}
                                </Card.Text>
                                <Button variant="primary">Buy now</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    );
};

export default SingleToyDetails;
