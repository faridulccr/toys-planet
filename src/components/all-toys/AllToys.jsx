import React, { useState } from "react";
import { Button, Container, Table, Toast } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";

const AllToys = () => {
    useTitle("All Toys");
    const { currentUser } = useAuth();
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const cars = useLoaderData();
    // console.log(cars);

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
                        {Array.isArray(cars) &&
                            cars.map((car) => (
                                <tr key={car.id}>
                                    <td>{car.seller}</td>
                                    <td>{car.name}</td>
                                    <td>{car.category}</td>
                                    <td>${car.price}</td>
                                    <td>{car.availableQuantity}</td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                handleViewDetails(car._id)
                                            }
                                            variant="primary"
                                        >
                                            View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                {/* <div className="text-center">
                    <Button onClick={handleSeeMore} variant="primary">
                        See More
                    </Button>
                </div> */}
            </Container>
        </div>
    );
};

export default AllToys;
