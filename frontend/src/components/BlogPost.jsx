import { useLoaderData } from "react-router-dom";
import UserProfile from "./UserProfile";
import Comment from "./Comment";

export default function BlogPost() {
  const [blog, comments ] = useLoaderData();
  const getDate = (contentDate)=>{
    return new Date(contentDate).toLocaleDateString();
  }

  return (
    <article className="blog-post w-auto">
      <section className="border-2 border-white p-4 mb-2 text-xs rounded-md">
        <section className="blog-header mb-2">
          <h2 className="text-3xl font-bold mb-4 text-gray-200">{blog.title}</h2>
          {/* <p>
            <i>Author : {author.username}</i>
          </p> */}
          <UserProfile user={blog.author} date={getDate(blog.updated_at)} />
        </section>

        <section className="blog-content mb-2 text-sm text-zinc-200">
          <p>{blog.body}</p>
        </section>
      </section>

      {
        comments.length > 0 &&
        <section className="nlog-comment bg-white text-gray-600 p-3 text-xs rounded-md">
        <h3 className="font-bold text-sm mb-2">Comments</h3>
        <div>
            {
              comments.map((comment) => (
                <Comment
                  user={comment.author}
                  date={getDate(comment.updated_at)}
                  content={comment.content}
                  key={comment._id}
                />
            ))
          }
        </div>
      </section>
      }
    </article>
  );
}
