import User from "../components/User";
import About from "../components/About";
import userLoader from "../components/loaders/userLoader";
import UserLayout from "../layout/UserLayout";
import Followers from "../components/Followers";

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
                path: "about",                  //todo
                element: <About />
            },
            {
                path: "followers",              //todo
                element: <Followers />
            }
        ],
    }
]

export default UserRoute;