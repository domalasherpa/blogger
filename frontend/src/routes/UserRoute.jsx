import User from "../components/User";
import About from "../components/About";
import userLoader from "../components/loaders/userLoader";
import UserLayout from "../layout/UserLayout";
import Followers from "../components/Followers";
import Following from "../components/Following";

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
                path: "followers",              
                element: <Followers />
            },
            {
                path: "following",
                element: <Following />
            }
        ],
    }
]

export default UserRoute;