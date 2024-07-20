import User from "../components/User";
import userLoader from "../components/loaders/userLoader";
import UserLayout from "../layout/UserLayout";

const UserRoute = [
    {
        path: "/:username",
        element: <UserLayout />,
        loader: userLoader,
        id: "user",
        children: [
            {
                path: "",
                element: <User />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "following",
                element: <Following />
            }
        ],
    }
]

export default UserRoute;