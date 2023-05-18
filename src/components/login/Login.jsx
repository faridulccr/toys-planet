import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "./Login.style.scss";

const Login = () => {
    useTitle("Log in");
    const { login, googleSignIn } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("");
        setLoading(true);

        login(email, password)
            .then(() => {
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setError("Login Failed! Try Again");
            });
    };

    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setError("Login Failed! Try Again");
            });
    };

    return (
        <div className="login-background-control" loading="lazy">
            <div className="row d-flex align-items-center justify-content-center height-control">
                <Container className="mx-auto mt-5 col-sm-6 px-4">
                    <h2 className="text-center text-white">Please Login</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formGroupPassword"
                        >
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <p
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-white"
                            style={{ cursor: "pointer" }}
                        >
                            {showPassword ? "Hide Password" : "Show Password"}
                        </p>
                        {loading ? (
                            <Spinner className="text-white" />
                        ) : (
                            <input
                                className="btn btn-secondary px-5 mb-3"
                                type="submit"
                                name="submit"
                                id="submit"
                            />
                        )}
                        {error && (
                            <>
                                <br />
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                            </>
                        )}
                        <div className="text-center">
                            <Button
                                onClick={handleSignInWithGoogle}
                                className="px-5 mb-3"
                                variant="outline-secondary"
                            >
                                <i className="fa-brands fa-google"></i> Sign in
                                with Google
                            </Button>
                        </div>
                        <p className="text-white">
                            Don't have an Account?
                            <Link
                                className="fs-3 ms-1 register-btn d-inline-block"
                                to="/signup"
                            >
                                Sign up
                            </Link>
                        </p>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Login;
