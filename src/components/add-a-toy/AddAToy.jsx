import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuth } from "../../providers/AuthProvider";
import "./AddAToy.style.scss";

const AddAToy = () => {
    const { currentUser } = useAuth();
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        category: "",
        price: "",
        rating: "",
        availableQuantity: "",
        description: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_LINK}/api/create-product`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...formData,
                        seller: currentUser.displayName,
                        email: currentUser.email,
                    }),
                }
            );
            const data = response.json();
            !data.error ? "" : "";
        } catch (error) {
            console.log(error);
        }

        // Clear form data
        setFormData({
            image: "",
            name: "",
            category: "",
            price: "",
            rating: "",
            availableQuantity: "",
            description: "",
        });
    };

    return (
        <div className="background text-white py-5">
            <h2 className="text-center pb-4"> Add A Toy</h2>
            <Container>
                <Row>
                    <Col className="mx-auto" md={8} lg={6}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-2" controlId="formImage">
                                <Form.Label>Picture URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="Toy picture URL"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formName">
                                <Form.Label>Toy Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter toy name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-2"
                                controlId="formCategory"
                            >
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option value="sports car">
                                        Sports Car
                                    </option>
                                    <option value="truck">Truck</option>
                                    <option value="police car">
                                        Police Car
                                    </option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter price"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleInputChange}
                                    placeholder="Rating up to 5"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-2"
                                controlId="formQuantity"
                            >
                                <Form.Label>Available Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="availableQuantity"
                                    value={formData.availableQuantity}
                                    onChange={handleInputChange}
                                    placeholder="Enter quantity"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-2"
                                controlId="formDescription"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Enter description"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Add Toy
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddAToy;
