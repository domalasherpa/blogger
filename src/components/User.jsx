import { useLoaderData } from "react-router-dom";

import Avatar from "./users/Avatar";
import Blog from "./Blog";
import Following from "./Following";
export default function User() {
    const {
        avatar,
        username,
        followers,
        following,
        bio,
        posts,
        nFollowers,
        nFollowing,
    } = useLoaderData();

    return (
        <div className="max-[820px]:flex-col-reverse flex w-full justify-between gap-3">
            <div className="max-[820px]:w-full w-3/4 border-2 border-white rounded-md p-3">
                {posts && posts.map((blog) => <Blog post={blog} key={blog.id} />)}
            </div>

            <div className="max-[820px]:w-full p-4 border-2 border-white rounded-md w-fit">
                <Avatar imageUrl={avatar} altText={`${username}'s image`} />
                <p>{username}</p>
                <p>{nFollowers} Followers</p>
                <p>{bio}</p>
                <button className="bg-slate-400 w-fit h-fit p-2 rounded-md self-center hover:bg-slate-300">
                    Follow
                </button>

                {nFollowing && (
                    <div>
                        <h1>Following</h1>
                        <div>
                            {following.map((user) => (
                                <Following follower={user} key={user.id} />
                            ))}
                        </div>
                    </div>
                )}

                {/*
                    nFollowers && (<div>
                        <h1>Followers</h1>
                        <div>
                            {
                                followers.map(user=>(
                                    <div key={user.id}>
                                        <image src={user.avatar} alt={`${user.username}'s image`} />
                                        <span>{user.username}</span>
                                        <p>LearnMore</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>)
                */}
            </div>
        </div>
    );
}

