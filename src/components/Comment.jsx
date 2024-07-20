import Avatar from "./users/Avatar";

export default function Comment({props}){
    const {user, date, content} = props;
    return (
        <div className="comment">
            <Avatar imageUrl={user.avatar} alt={`${user.username}'s image`}/>
            <span>{user.username}</span>
            <span>{date}</span>
            <p>{content}</p>
        </div>

    )
}