import { useLoaderData } from "react-router-dom";
import UserProfile from "./UserProfile";


export default function BlogPost(){
  const { title, content, author, date, comments } = useLoaderData();

  return (
    <article className="blog-post w-auto">
      <section className="border-2 border-white p-4 mb-2 text-xs rounded-md">
        <section className="blog-header mb-2">
          <h2 className="text-3xl font-bold mb-4 text-gray-200">{title}</h2>
          {/* <p>
            <i>Author : {author.username}</i>
          </p> */}
          <UserProfile user={author} date= {date}/>
        </section>

        <section className="blog-content mb-2 text-sm text-zinc-200">
          <p>{content}</p>
        </section>
      </section>

      <section className="nlog-comment bg-white text-gray-600 p-3 text-xs rounded-md">
        <h3 className="font-bold text-sm mb-2">Comments</h3>
        <div>
          {comments.map(comment => (
            <div key={comment.id} className="mb-2 bg-slate-200 p-2 rounded-lg">
              <p><strong>{comment.user.username}</strong> - {comment.content}</p>
              <p><i className="text-xs">{comment.date}</i></p>
            </div>
          ))}
        </div>
      </section>
      
      
    </article>
  );
}



