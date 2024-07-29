
import { useRouteLoaderData } from "react-router-dom";
import FollowCard from "./FollowCard";

export default function Followers(){
    const {followers} = useRouteLoaderData("user");
    return (
        <div className="text-xs my-2">
            {
                followers ? followers.map(follower=>(
                    <FollowCard avatar={follower.avatar} fullName={follower.fullName} bio={follower.bio} key={follower.id} username={follower.username}/>
                ))
                : <p>No followers</p>
            }
        </div>
    )
}


