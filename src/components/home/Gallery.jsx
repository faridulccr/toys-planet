import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Gallery.style.scss";

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 1",
            animation: "flip-left",
        },
        {
            id: 2,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 2",
            animation: "fade-down",
        },
        {
            id: 3,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 3",
            animation: "flip-up",
        },
        {
            id: 4,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 4",
            animation: "flip-right",
        },
        {
            id: 5,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 5",
            animation: "flip-down",
        },
        {
            id: 6,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 6",
            animation: "fade-up",
        },
        {
            id: 7,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 7",
            animation: "fade-up",
        },
        {
            id: 8,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 8",
            animation: "fade-left",
        },
        {
            id: 9,
            imageUrl:
                "https://www.shutterstock.com/image-vector/3d-fathers-day-birthday-template-600w-2157899723.jpg",
            title: "Image 9",
            animation: "flip-left",
        },
    ];

    return (
        <section className="gallery-section">
            <Container>
                <h2 className="section-title">Gallery</h2>
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
                                <img src={item.imageUrl} alt={item.title} />
                                <div className="overlay">
                                    <h4>{item.title}</h4>
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
