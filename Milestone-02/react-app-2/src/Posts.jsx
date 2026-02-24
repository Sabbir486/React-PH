import {use} from "react"
import Post from './Post'

export default function Posts({fetchPosts}){

    const posts = use(fetchPosts);
    console.log(fetchPosts);
    

    return(
        <div className="bordered-card">
            <h2>All Posts are Here: {posts.length}</h2>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}