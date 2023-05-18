import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "./Signup.style.scss";

const SignUp = () => {
    useTitle("Sign Up");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { signUp } = useAuth();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = async (event) => {
        event.preventDefault();
        setError("");
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase");
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Please add at least two digits");
            return;
        } else if (password.length < 6) {
            setError("Please use at least 6 character for your password");
            return;
        }

        try {
            await signUp(email, password, name, photoURL);
            navigate(from);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
    };

    return (
        <div className="signup-background-control" loading="lazy">
            <div>
                <div className="col-sm-6 mx-auto px-4">
                    <h2 className="text-center text-white my-4">
                        Create an Account
                    </h2>
                    <Form onSubmit={handleRegister} className="mx-auto">
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                required
                            />
                        </Form.Group>
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
                        <Form.Group className="mb-3" controlId="formGroupPhoto">
                            <Form.Control
                                type="text"
                                name="photo"
                                placeholder="Paste Your Photo Url"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                className="text-white"
                                type="checkbox"
                                label="Accept Terms and Conditions"
                                required
                            ></Form.Check>
                        </Form.Group>
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

                        <p className="text-error text-danger">{error}</p>
                        <p className="text-white">
                            Already have an account?{" "}
                            <Link className="fs-3 login-btn" to="/login">
                                Log in
                            </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
