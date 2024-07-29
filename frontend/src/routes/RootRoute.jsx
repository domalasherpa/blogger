import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ProfileRoute from "./ProfileRoute";
import BlogsRoute from "./BlogsRoute";
import ErrorRoute from "./ErrorRoute";
import HomeRoute from "./HomeRoute";
import UserRoute from "./UserRoute";

import Login from "../components/Login";
import Register from '../components/Register';
import ProtectedRoute from "../components/ProtectedRoute";

const RootRoute = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute><RootLayout /></ProtectedRoute>,
        children:[
            ...HomeRoute,
            ...ProfileRoute,
            ...BlogsRoute,
            ...ErrorRoute,
            ...UserRoute,
            
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/signout',
        element: (
            <>
                {
                    localStorage.clear()
                }
            </>
        )
    }
]);

export default RootRoute;