import { useLoaderData } from 'react-router-dom';
import Blog from './Blog'; 
export default function Blogs(){
  const posts = useLoaderData();
  return (
    <div className="blogs">
      <h1 className="text-lg">Blogs</h1>
      {posts.map(post=> (
        <Blog key={post.id} post={post} />
      ))}
    </div>
  );
}


const blogsLoader = async()=>{
  try {
    const response = await fetch('http://localhost:4000/posts');

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error; 
  }
}

Blogs.loader = blogsLoader;