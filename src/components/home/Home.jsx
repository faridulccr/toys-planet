import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import bannerImage from "../../assets/images/banner-2.webp";
import useTitle from "../../hooks/useTitle";
import "./Home.style.scss";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: true, // Animation will trigger only once
        });
    }, []);
    useTitle("Home");
    return (
        <div>
            <div
                id="banner"
                className="d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 640px",
                }}
            >
                <Container
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >
                    <h1>Welcome to My Website</h1>
                    <p>
                        Discover a world of amazing toys and games for all ages!
                    </p>
                    <Button variant="primary">Shop Now</Button>
                </Container>
            </div>
            <Container>{/* Rest of the content */}</Container>
        </div>
    );
};

export default Home;
