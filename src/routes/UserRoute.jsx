import User from "../components/User";
import userLoader from "../components/loaders/userLoader";

const UserRoute = [
    {
        path: "/:username",
        element: <User />,
        loader: userLoader,
        children: [
            {    
                path: "blogs",
                element: <h1>Displays all the user blogs</h1>
            }
        ],
    }
]

export default UserRoute;