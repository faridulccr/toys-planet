import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Row,
    Spinner,
    Table,
    Toast,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";

const AllToys = () => {
    useTitle("All Toys");
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_LINK}/api/products`
                );
                const result = await response.json();
                setCars(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        loadData();
    }, []);

    // console.log(cars);
    const handleSearch = () => {
        const results = cars.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCars(results);
    };

    const enterHandle = (e) => {
        setSearchTerm(e.target.value);
        if (e.key == "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

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
                <Row>
                    <Col sm={10} md={6} className="mx-auto">
                        <Form className="mb-5" inline>
                            <FormControl
                                type="text"
                                placeholder="Search by name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={enterHandle}
                            />
                            <Button
                                className="mt-3"
                                variant="primary"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Table responsive className="text-white">
                    {loading ? (
                        <thead>
                            <tr className="text-center">
                                <Spinner />
                            </tr>
                        </thead>
                    ) : (
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
                    )}

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
