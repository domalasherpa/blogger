import Avatar from "./users/Avatar";
import Button from "./Button";
import { useRouteLoaderData , Link} from "react-router-dom";

export default function Followers(){
    const {followers} = useRouteLoaderData("user");
    return (
        <div>
            {
                followers && followers.map(follower=>(
                    <Follower avatar={follower.avatar} fullName={follower.fullName} bio={follower.bio} key={follower.id} username={follower.username}/>
                ))
            }
        </div>
    )
}


function Follower({avatar, fullName, bio, username}){
    return (
        <div className="flex text-xs gap-3 justify-between my-2 bg-slate-200 p-2 rounded-md">
            <div className="flex gap-2">
                <Avatar imageUrl={avatar} alt={`${fullName}'s image`} />
                <div className="">
                    <p className="font-bold text-gray-600"><Link to={`/@${username}`}>{fullName}</Link></p>
                    <p className="text-slate-400">{bio}</p>
                </div>
            </div>
            <Button text="Follow"/>
        </div>
    )
}