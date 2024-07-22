import Avatar from "./users/Avatar";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function FollowCard({avatar, fullName, bio, username}){
    return (
        <div className="flex text-xs justify-between my-2 bg-slate-200 p-2 rounded-md flex-wrap">
            <div className="flex gap-2">
                <Avatar imageUrl={avatar} alt={`${fullName}'s image`} className="aspect-square"/>
                <div className="">
                    <p className="font-bold text-gray-600"><Link to={`/@${username}`}>{fullName}</Link></p>
                    <p className="text-slate-400">{bio}</p>
                </div>
            </div>
            <Button text="Follow"/>
        </div>
    )
}