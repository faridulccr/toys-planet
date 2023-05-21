import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

// components
import App from "./App";
import AddAToy from "./components/add-a-toy/AddAToy";
import AllToys from "./components/all-toys/AllToys";
import Blogs from "./components/blogs/Blogs";
import ErrorPage from "./components/error-page/ErrorPage";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyToys from "./components/my-toys/MyToys";
import SignUp from "./components/signup/Signup";
import SingleToyDetails from "./components/single-toy-details/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./providers/AuthProvider";

// components import

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () =>
                    fetch(`${import.meta.env.VITE_API_LINK}/api/products`),
            },
            {
                path: "/my-toys",
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/add-a-toy",
                element: (
                    <PrivateRoute>
                        <AddAToy />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/single-toy-details/:id",
                element: (
                    <PrivateRoute>
                        <SingleToyDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${import.meta.env.VITE_API_LINK}/api/single-product/${
                            params.id
                        }`
                    ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
