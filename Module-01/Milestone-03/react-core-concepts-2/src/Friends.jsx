import { use } from 'react'
import './App.css'


export default function Friends({fetchFriends})  {

    const friends = use(fetchFriends);
    console.log(friends);
    

        return(
            <div className="users">
                <h3>Friends: {friends.length}</h3>
            </div>
        )
}