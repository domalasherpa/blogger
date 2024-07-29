import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const UserData = ({ user, date }) => {
    const [hover, setHover] = useState(false);
    const hoverTimeoutRef = useRef(null);
    
    const handleMouseEnter = () => {
        clearTimeout(hoverTimeoutRef.current); // Clear any existing timeout
        setHover(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout to hide UserCard after 1 second (1000 milliseconds)
        hoverTimeoutRef.current = setTimeout(() => {
            setHover(false);
        }, 200);
    };

    return (
        <div className="block relative">
            <div className="ml-4">
                <p className="text-lg font-bold self-center hover:underline"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <Link to={`/@${user.username}`} >{user.username}</Link>
                </p>
                <p className="text-sm text-gray-800 font-semibold">Posted on: {date}</p>
            </div>

            {hover && <UserCard
                user={user}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave} />

            }
        </div>
    );
};

export default UserData;