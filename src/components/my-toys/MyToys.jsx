import React, { useEffect, useState } from "react";
import { Button, Container, Table, Toast } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
    useTitle("My Toys");
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toyId, setToyId] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_LINK}/api/user-products/${
                        currentUser.email
                    }`
                );
                const result = await response.json();
                // console.log(result);
                setData(result);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        getData();
    }, []);
    const handleDelete = async (id) => {
        const isConfirm = confirm("Do you wand to delete?");
        if (isConfirm) {
            setDeleteLoading(true);
            const response = await fetch(
                `${import.meta.env.VITE_API_LINK}/api/delete-product/${id}`,
                {
                    method: "DELETE",
                }
            );
            const result = await response.json();
            setShowToast(result.message);
            setDeleteLoading(false);
            setTimeout(() => {
                setShowToast(false);
            }, 2000);

            const remainingData = data.filter((car) => car._id !== id);
            setData(remainingData);
        }
    };

    return (
        <div className="background py-5">
            {showToast && (
                <Toast className="notify-toast">
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body className="fw-bold fs-3 text-dark">
                        {showToast}
                    </Toast.Body>
                </Toast>
            )}
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
                        {!loading &&
                            Array.isArray(data) &&
                            data.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.availableQuantity}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                setShowModal(true);
                                                setToyId(item._id);
                                            }}
                                            variant="info"
                                        >
                                            Update
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                handleDelete(item._id)
                                            }
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
            {showModal && (
                <UpdateModal
                    setShowModal={setShowModal}
                    toyId={toyId}
                    setShowToast={setShowToast}
                    setData={setData}
                    data={data}
                />
            )}
        </div>
    );
};

export default MyToys;
