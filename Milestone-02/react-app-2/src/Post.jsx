export default function Post({post}){

    const {body} = post;
    return(
        <div>
            <h4>Post: {body}</h4>
        </div>
    )
}