import { useRouteLoaderData } from "react-router-dom";
import FollowCard from "./FollowCard";

export default function Following(){
    const {following} = useRouteLoaderData("user");
    return (
        <div className="text-xs my-2">
            {
                following ? following.map(followed=>(
                    <FollowCard avatar={followed.avatar} fullName={followed.fullName} bio={followed.bio} key={followed.id} username={followed.username}/>
                ))
                : <p>No Following</p>
            }
        </div>
    )
}
