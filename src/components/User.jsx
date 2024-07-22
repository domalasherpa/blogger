import { useRouteLoaderData } from "react-router-dom";
import Blog from "./Blog";

export default function User() {
    const user = useRouteLoaderData("user");

    return (
        <div className="my-5 text-xs">
            {
                user.posts ? (
                    user.posts.map((blog) => <Blog post={blog} key={blog.id} />)
                ) : (
                    <p>Have not posted anything.</p>
                )
            }
        </div>
    );
}
