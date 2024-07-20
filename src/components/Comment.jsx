import { Link } from "react-router-dom";
import Avatar from "./users/Avatar";

export default function Comment({user, date, content}){

    return (
        <div className="comment text-xs mb-2 bg-slate-100 p-2 rounded-md">
            <div className="flex h-10">
                <Avatar imageUrl={user.avatar} alt={`${user.username}'s image`} className="h-7 w-7 object-contain"/>
                <div className="ml-2">
                    <p className="hover: underline"><Link to={`/@${user.username}`}>{user.username}</Link></p>
                    <p className="italic">{date}</p>
                </div>
            </div>
            <p>{content}</p>
        </div>

    )
}