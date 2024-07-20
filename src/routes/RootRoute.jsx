import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ProfileRoute from "./ProfileRoute";
import BlogsRoute from "./BlogsRoute";
import ErrorRoute from "./ErrorRoute";
import HomeRoute from "./HomeRoute";
import UserRoute from "./UserRoute";

const RootRoute = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children:[
            ...HomeRoute,
            ...ProfileRoute,
            ...BlogsRoute,
            ...ErrorRoute,
            ...UserRoute
        ]
    }
]);

export default RootRoute;