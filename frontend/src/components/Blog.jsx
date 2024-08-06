import { Link } from "react-router-dom";

export default function Blog({post}){
    return(
        <div className="blog w-auto bg-purple-50 text-gray-800 my-2 p-2 rounded-md">
            <h1 className="my-1">{post.title}</h1>
            <p className="text-xs italic mb-1">Author : {post.author.username}</p>
            <Link to={`/blogs/${post._id}`} className="text-xs bg-zinc-400 my-7 p-1 rounded-sm">Readmore</Link>
        </div>
    )
}