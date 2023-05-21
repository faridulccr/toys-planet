import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import bannerImage from "../../assets/images/banner-2.webp";
import useTitle from "../../hooks/useTitle";
import Features from "./Features";
import Gallery from "./Gallery";
import "./Home.style.scss";
import Review from "./Review";
import TabsSection from "./TabsSection";

const Home = () => {
    useTitle("Home");
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: false, // Animation will trigger only once
        });
    }, []);

    return (
        <div className="background pb-5">
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
                    <div id="banner-text">
                        <h1 className="text-white fw-bold">
                            Welcome to{" "}
                            <span style={{ color: "#e3e63f" }}>
                                {" "}
                                Toys-Planet{" "}
                            </span>
                        </h1>
                        <p className="text-white fw-semibold">
                            Discover a world of amazing toys and games for all
                            ages!
                        </p>
                        <Button variant="primary">Shop Now</Button>
                    </div>
                </Container>
            </div>
            <Gallery />
            <Container>
                <TabsSection />
            </Container>
            <Features />
            <Review />
        </div>
    );
};

export default Home;
