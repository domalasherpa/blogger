import Avatar from "./users/Avatar";
import UserData from "./users/UserData";

export default function UserProfile({ user, date }) {
    return (
        <div className="user-profile flex mb-4">
            <Avatar imageUrl={user.avatar} alt={`${user.username}'s avatar`} />
            <UserData user={user} date={date} />
        </div>
    )
}

