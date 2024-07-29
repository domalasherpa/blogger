import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function UserCard({ user, handleMouseEnter, handleMouseLeave }) {
    return (
        <div
            className="user-card absolute bg-white text-gray-800 p-4 rounded-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="flex justify-between mb-2">
                <Avatar imageUrl={user.avatar} alt={`${user.username}'s avatar`} />
                <button className="bg-slate-300 w-fit h-fit p-2 rounded-md self-center hover:bg-slate-400">Follow</button>
            </div>
            <p className="mb-2 hover:underline"><Link to={`/@${user.username}`}>{user.username}</Link></p>
            <p className="mb-1">{user.followers ?? 0} followers</p>
            <p className="">{user.bio ?? ""}</p>
        </div>
    )
}