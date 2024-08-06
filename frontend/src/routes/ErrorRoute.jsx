import ErrorPage from  "../components/ErrorPage";
import ProtectedRoute from "../components/ProtectedRoute";

const errorRoutes = [
    {
        path: '*',
        element: <ProtectedRoute><ErrorPage /></ProtectedRoute>
    }
];

export default errorRoutes;