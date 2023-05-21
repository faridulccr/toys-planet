import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

const UpdateModal = ({
    toyId,
    setShowModal,
    showModalData,
    setShowToast,
    setData,
    data,
}) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        ...showModalData,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            setLoading(true);
            const response = await fetch(
                `${import.meta.env.VITE_API_LINK}/api/update-product/${toyId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...formData }),
                }
            );
            const result = await response.json();

            if (!result.error) {
                setShowToast(result.message);
                setLoading(false);
                setShowModal(false);
                const existingData = data.filter((car) => car._id !== toyId);
                const updatedData = {
                    ...data.find((car) => car._id === toyId),
                    ...formData,
                };
                setData([updatedData, ...existingData]);
                setTimeout(() => {
                    setShowToast(false);
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setShowModal(false);
            setShowToast("something broke");
            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }
        setFormData({
            price: "",
            availableQuantity: "",
            description: "",
        });
    };

    return (
        <div>
            <Modal show={true} size="lg">
                <div className="text-end pe-2">
                    <span
                        onClick={() => setShowModal(false)}
                        className=" text-danger fw-bold"
                        style={{ cursor: "pointer" }}
                    >
                        X
                    </span>
                </div>

                <Modal.Header>
                    <Modal.Title>Update Toy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="price">
                            <Form.Label>
                                <strong>Price:</strong>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter price"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="availableQuantity">
                            <Form.Label>
                                <strong>Available Quantity:</strong>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="availableQuantity"
                                value={formData.availableQuantity}
                                onChange={handleChange}
                                placeholder="Quantity"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>
                                <strong>Description:</strong>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter description"
                                required
                            />
                        </Form.Group>
                        <Button
                            className="mt-3"
                            variant="primary"
                            type="submit"
                        >
                            {loading ? <Spinner /> : "Update now"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateModal;
