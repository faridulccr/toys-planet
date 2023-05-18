import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

// components
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import Home from "./components/home/Home";
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
            // {
            //     path: "/signup",
            //     element: <SignUp />,
            // },
            // {
            //     path: "/login",
            //     element: <Login />,
            // },
            // {
            //     path: "/blog",
            //     element: <Blog />,
            // },
            // {
            //     path: "/recipes/:chefsID",
            //     element: (
            //         <PrivateRoute>
            //             <Recipes />
            //         </PrivateRoute>
            //     ),
            //     loader: ({ params }) =>
            //         fetch(
            //             `${import.meta.env.VITE_SERVER_API}/chefs/${
            //                 params.chefsID
            //             }`
            //         ),
            // },
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
