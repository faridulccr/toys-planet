import { Outlet, useNavigation } from "react-router-dom";
import "./App.scss";

// components import
import { Spinner } from "react-bootstrap";
// import Footer from "./components/footer/Footer";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    // for showing spinner when loading
    const navigation = useNavigation();

    return (
        <>
            <Header />
            <main id="main">
                {navigation.state === "loading" ? (
                    <div
                        className="d-flex vh-100 justify-content-center align-items-center"
                        id="pending"
                    >
                        <Spinner />
                    </div>
                ) : (
                    <Outlet />
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
