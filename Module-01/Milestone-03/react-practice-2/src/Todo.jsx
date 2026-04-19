import './App.css';

export default function Todo({todo}){

    const {title, userId} = todo;


    return(
        <div className="todo">
            <h5>Full Title: {title}</h5>
            <p>User ID: {userId}</p>
        </div>

    )
}