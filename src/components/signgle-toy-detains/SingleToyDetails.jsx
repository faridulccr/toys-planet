import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./SingleToyDetails.style.scss";

const SingleToyDetails = ({
    image,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
}) => {
    return (
        <div className="background pt-5">
            <Container>
                <h2 className="text-center text-white fw-bold mb-4">
                    View Details
                </h2>
                <Card className="toy-banner">
                    <Row>
                        <Col md={7}>
                            <Card.Img
                                variant="top"
                                src="https://m.media-amazon.com/images/I/81Pg8JfI7ZL.jpg"
                                alt={toyName}
                            />
                        </Col>
                        <Col md={5} className="d-flex align-items-center ps-4">
                            <Card.Body>
                                <Card.Title>Name: {toyName}</Card.Title>
                                <Card.Text>
                                    <strong>Seller:</strong> {sellerName}
                                    <br />
                                    <strong>Email:</strong> {sellerEmail}
                                    <br />
                                    <strong>Price:</strong> ${price}
                                    <br />
                                    <strong>Rating:</strong> {rating}/5
                                    <br />
                                    <strong>Quantity:</strong> {quantity}
                                    <br />
                                    <strong>Description:</strong> {quantity}
                                </Card.Text>
                                <Card.Text>{description}</Card.Text>
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
