import BlogPost from "../components/BlogPost";
import Blogs from "../components/Blogs";
import BlogsLayout from "../layout/BlogsLayout";
import BlogsError from "../components/BlogsError";
import blogPostLoader from "../components/loaders/blogPostLoader";
import ProtectedRoute from "../components/ProtectedRoute";

const BlogsRoute = [{
        path: 'blogs',
        element: <ProtectedRoute><BlogsLayout /></ProtectedRoute>,
        children: [
            {
                path: '',
                element: <ProtectedRoute><Blogs /></ProtectedRoute>,
                loader: Blogs.loader
            },
            {
                path: ':blogsId',
                element: <ProtectedRoute><BlogPost /></ProtectedRoute>,
                loader: blogPostLoader
            }  
        ],
        errorElement: <ProtectedRoute><BlogsError /></ProtectedRoute>
}];

export default BlogsRoute;