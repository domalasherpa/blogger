import { useLoaderData } from 'react-router-dom';
import Blog from './Blog'; 
import api from "../utils/api";

export default function Blogs(){
  const blogs = useLoaderData();
  return (
    <div className="blogs">
      <h1 className="text-lg">Blogs</h1>
      {blogs.map(blog=> (
        <Blog key={blog._id} post={blog} />
      ))}
    </div>
  );
}


const blogsLoader = async()=>{
  try {
    const response = await api.get('/blog');

    if (response.status !== 200) {
      throw new Error('Failed to fetch blog posts');
    }
    return response.data.blogs ?? [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error; 
  }
}

Blogs.loader = blogsLoader;