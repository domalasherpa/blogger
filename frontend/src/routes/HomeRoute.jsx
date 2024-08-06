import Home from "../components/Home";
import ProtectedRoute from "../components/ProtectedRoute";

const HomeRoute = [
    {
        path: '/',
        element: <ProtectedRoute><Home /></ProtectedRoute>
    }
];

export default HomeRoute;