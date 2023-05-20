import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import "./MyToys.style.scss";

const MyToys = () => {
    useTitle("My Toys");
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toyId, setToyId] = useState("");
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
    const updateHandler = (id) => {};

    return (
        <div className="background py-5">
            <Container>
                <h2 className="text-white text-center mb-4">Your Toys</h2>
                <Table responsive className="text-white">
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.color}</td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            setShowModal(true);
                                            setToyId();
                                        }}
                                        variant="info"
                                    >
                                        Update
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => {
                                            handleViewDetails();
                                            setToyId();
                                        }}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyToys;
