import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

// components
import App from "./App";
import AddAToys from "./components/add-a-toys/AddAToys";
import AllToys from "./components/all-toys/AllToys";
import Blogs from "./components/blogs/Blogs";
import ErrorPage from "./components/error-page/ErrorPage";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MyToys from "./components/my-toys/MyToys";
import SingleToyDetails from "./components/signgle-toy-detains/SingleToyDetails";
import SignUp from "./components/signup/Signup";
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
                // loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/chefs`),
            },
            {
                path: "/all-toys",
                element: <AllToys />,
            },
            {
                path: "/my-toys/:email",
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/add-a-toys",
                element: (
                    <PrivateRoute>
                        <AddAToys />
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
