import React, { useState } from "react";
import { Button, Container, Table, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "./AllToys.style.scss";

const AllToys = () => {
    useTitle("All Toys");
    const { currentUser } = useAuth();
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            name: "Car 1",
            brand: "Brand 1",
            color: "Red",
            price: 10000,
            stock: 5,
        },
        {
            id: 2,
            name: "Car 2",
            brand: "Brand 2",
            color: "Blue",
            price: 15000,
            stock: 10,
        },
        {
            id: 3,
            name: "Car 3",
            brand: "Brand 3",
            color: "Green",
            price: 12000,
            stock: 8,
        },
        {
            id: 4,
            name: "Car 4",
            brand: "Brand 4",
            color: "Yellow",
            price: 18000,
            stock: 3,
        },
        {
            id: 5,
            name: "Car 5",
            brand: "Brand 5",
            color: "Black",
            price: 20000,
            stock: 12,
        },
    ];
    const handleViewDetails = (id) => {
        if (!currentUser) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate(`/single-toy-details/${id}`, { replace: true });
            }, 2000);
        } else {
            navigate(`/single-toy-details/${id}`, { replace: true });
        }
    };

    return (
        <div className="background pb-5">
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
            <Container>
                <h2 className="text-white text-center pt-5 mb-4">All Toys</h2>
                <Table responsive className="text-white">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Button
                                        onClick={() => handleViewDetails()}
                                        variant="primary"
                                    >
                                        View Details
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="text-center">
                    <Button variant="primary">See More</Button>
                </div>
            </Container>
        </div>
    );
};

export default AllToys;
