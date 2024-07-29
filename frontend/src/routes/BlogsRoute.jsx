import BlogPost from "../components/BlogPost";
import Blogs from "../components/Blogs";
import BlogsLayout from "../layout/BlogsLayout";
import BlogsError from "../components/BlogsError";
import blogPostLoader from "../components/loaders/blogPostLoader";

const BlogsRoute = [{
        path: 'blogs',
        element: <BlogsLayout />,
        children: [
            {
                path: '',
                element: <Blogs />,
                loader: Blogs.loader
            },
            {
                path: ':blogsId',
                element: <BlogPost />,
                loader: blogPostLoader
            }  
        ],
        errorElement: <BlogsError />
}];

export default BlogsRoute;