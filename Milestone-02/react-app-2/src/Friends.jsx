import {use} from "react"

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise);

    return(
        <div className="bordered-card">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}