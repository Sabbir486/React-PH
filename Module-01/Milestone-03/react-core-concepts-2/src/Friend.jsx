export default function Friend({friend})  {
    return(
        <div>
            <h3>Friend: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
        </div>
    )
}