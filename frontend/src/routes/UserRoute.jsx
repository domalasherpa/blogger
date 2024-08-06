import User from "../components/User";
import About from "../components/About";
import userLoader from "../components/loaders/userLoader";
import UserLayout from "../layout/UserLayout";
import Followers from "../components/Followers";
import Following from "../components/Following";
import ProtectedRoute from "../components/ProtectedRoute";

const UserRoute = [
    {
        path: "/:username",
        element: <ProtectedRoute><UserLayout /></ProtectedRoute>,
        loader: userLoader,
        id: "user",
        children: [
            {
                path: "",
                element: <ProtectedRoute><User /></ProtectedRoute>
            },
            {
                path: "about",                  
                element: <ProtectedRoute><About /></ProtectedRoute>
            },
            {
                path: "followers",              
                element: <ProtectedRoute><Followers /></ProtectedRoute>
            },
            {
                path: "following",
                element: <ProtectedRoute><Following /></ProtectedRoute>
            }
        ],
    }
]

export default UserRoute;