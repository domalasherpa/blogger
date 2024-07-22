import { useRouteLoaderData, Link } from "react-router-dom"

export default function About(){

    const {nFollowers, nFollowing, username} = useRouteLoaderData("user");

    return (
        <div className="flex gap-3 my-4 text-xs">
            <span><Link to={`/@${username}/followers`} className="text-purple-300 hover:underline">{nFollowers} Followers</Link></span>
            <span><Link to={`/@${username}/followers`} className="text-purple-300 hover:underline">{nFollowing} Following</Link></span>
        </div>
    )
}