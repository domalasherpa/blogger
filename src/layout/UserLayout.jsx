import { Link, Outlet, useLoaderData } from "react-router-dom";
import Avatar from "../components/users/Avatar";
import Following from "../components/Following";

export default function UserLayout() {
    const {
        avatar,
        username,
        following,
        bio,
        nFollowers,
        nFollowing,
      } = useLoaderData();
  return (
    <div className="max-[820px]:flex-col-reverse flex w-full justify-between gap-4">
      <div className="max-[820px]:w-full w-3/4">
            <div className="flex gap-3 border-b-2 py-3">
                <span className="hover:underline"><Link to="">Home</Link></span>
                <span><Link to="about">About</Link></span>
            </div>
            
            <Outlet /> 
        </div>    
        
        <div>
        <div className="max-[820px]:w-full p-4 border-2 border-slate-200 rounded-md w-fit text-xs">
          <Avatar imageUrl={avatar} altText={`${username}'s image`} />
          <p className="my-2">{username}</p>
          <p className="mb-1 text-slate-400">{nFollowers} Followers</p>
          <p>{bio}</p>
          <button className="bg-slate-400 w-fit h-fit p-2 rounded-md self-center hover:bg-slate-300 my-2">
            Follow
          </button>
        </div>

        {nFollowing && (
          <div className="p-4 border-2 border-slate-200 rounded-md my-2">
            <h1 className="text-sm mb-2">Following</h1>
            <div>
              {following.map((user) => (
                <Following follower={user} key={user.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
