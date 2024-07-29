import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { IoIosMore } from "react-icons/io";
import UserCard from "./users/UserCard";

export default function Following({ follower }) {
    const [hover, setHover] = useState(false);
    const hoverTimeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeoutRef.current);
        setHover(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHover(false);
        }, 200);
    };

    return (
        <div className="flex text-xs justify-between flex-wrap relative">
            <div className="flex">
                <img
                    src={follower.avatar}
                    alt={`${follower.username}'s image`}
                    className="h-6 w-6 rounded-full object-cover shadow-md"
                />
                <span className="self-end ml-1">
                    <Link to={`/@${follower.username}`}>{follower.username}</Link>
                </span>
            </div>
            <div
                className="self-center rounded-full border-2 border-transparent hover:border-white cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <IoIosMore />
            </div>
            {hover && (
                <UserCard
                    user={follower}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
            )}
        </div>
    );
}
