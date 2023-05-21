import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table, Toast } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
    useTitle("My Toys");
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalData, setShowModalData] = useState();
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
        const isConfirm = confirm("Do you want to delete?");
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

    const handleSort = (order) => {
        const sortedResults = [...data].sort((a, b) => {
            if (order === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setData(sortedResults);
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
                <h2 className="text-white text-center mb-4">
                    You have added this toys
                </h2>
                <div className="text-center mb-3">
                    <Button
                        className="mb-2"
                        variant="secondary"
                        onClick={() => handleSort("asc")}
                    >
                        Sort by Price (Low to High)
                    </Button>
                    <br />
                    <Button
                        variant="secondary"
                        onClick={() => handleSort("desc")}
                    >
                        Sort by Price (High to Low)
                    </Button>
                </div>
                <Table responsive className="text-white">
                    {loading ? (
                        <tbody>
                            <tr className="text-center">
                                <Spinner />
                            </tr>
                        </tbody>
                    ) : (
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
                    )}

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
                                                setShowModalData({
                                                    price: item.price,
                                                    availableQuantity:
                                                        item.availableQuantity,
                                                    description:
                                                        item.description,
                                                });
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
                    showModalData={showModalData}
                />
            )}
        </div>
    );
};

export default MyToys;
