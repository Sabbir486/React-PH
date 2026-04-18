import { use } from 'react'
import './App.css'
import Friend from './Friend';


export default function Friends({fetchFriends})  {

    const friends = use(fetchFriends);
    console.log(friends);
    

        return(
            <div className="users">
                <h3>Friends: {friends.length}</h3>

                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        )
}