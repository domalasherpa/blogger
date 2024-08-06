import Profile from "../components/Profile";
import ProtectedRoute from "../components/ProtectedRoute";

const ProfileRoute = [{
    path: '/profile',
    element: <ProtectedRoute><Profile /></ProtectedRoute>
}];

export default ProfileRoute;