import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Gallery.style.scss";

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            imageUrl:
                "https://m.media-amazon.com/images/I/61-f5D7KZJS._SL1500_.jpg",
            title: "Lamborghini Aventador",
            animation: "flip-left",
            price: 20,
        },
        {
            id: 2,
            imageUrl:
                "https://m.media-amazon.com/images/I/41sas7Z0ApL._SY300_SX300_QL70_FMwebp_.jpg",
            title: "Ford Mustang GT",
            animation: "fade-down",
            price: 10,
        },
        {
            id: 3,
            imageUrl:
                "https://www.carexpert.com.au/app/uploads/2021/09/2022-Mercedes-Benz-G400d-HERO.jpg",
            title: "Mercedes-Benz G-Class",
            animation: "flip-up",
            price: 35,
        },
        {
            id: 4,
            imageUrl:
                "https://m.media-amazon.com/images/I/61-sCwTfPcL._SL1300_.jpg",
            title: "Porsche 911 Carrera",
            animation: "flip-right",
            price: 30,
        },
        {
            id: 5,
            imageUrl:
                "https://m.media-amazon.com/images/I/51VNKgVKugS._AC_SL1000_.jpg",
            title: "BMW i8",
            animation: "flip-down",
            price: 20,
        },
        {
            id: 6,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtKcFuv7tyVZDm_SoRf3STlhGs9PlpjB6PQ&usqp=CAU",
            title: "Jeep Wrangler Rubicon",
            animation: "fade-up",
            price: 30,
        },
        {
            id: 7,
            imageUrl:
                "https://www.outdoortoys.co.uk/media/catalog/product/cache/93cbc4238ea8fe1e6d430188100579b0/l/i/licensed-audi-compact-r8-spyder-12v-ride-on-black_1.jpg",
            title: "Audi R8 Spyder",
            animation: "fade-up",
            price: 50,
        },
        {
            id: 8,
            imageUrl: "https://m.media-amazon.com/images/I/81Pg8JfI7ZL.jpg",
            title: "Chevrolet Camaro SS",
            animation: "fade-left",
            price: 40,
        },
        {
            id: 9,
            imageUrl:
                "https://cdn.shopify.com/s/files/1/0559/3910/4829/products/s9c8nnc3t2tdupj4vrmh.jpg?v=1655928666",
            title: "Bugatti Chiron",
            animation: "flip-left",
            price: 50,
        },
    ];

    return (
        <section className="gallery-section">
            <Container>
                <h2 className="section-title text-white">Gallery</h2>
                <Row>
                    {galleryItems.map((item) => (
                        <Col
                            key={item.id}
                            xs={12}
                            sm={6}
                            md={4}
                            data-aos={item.animation}
                        >
                            <div className="gallery-item">
                                <img
                                    className="gallery-img"
                                    src={item.imageUrl}
                                    alt={item.title}
                                />
                                <div className="overlay">
                                    <h4>
                                        {item.title} <br /> {`$ ${item.price}`}
                                    </h4>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;
