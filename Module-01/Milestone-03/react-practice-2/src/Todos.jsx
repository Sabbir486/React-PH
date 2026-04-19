import './App.css'
import { use } from 'react';

export default function Todos({fetchTodos}){

    const todos = use(fetchTodos);
    console.log(todos);
    

    return(
        <div>
            <h3>Title: {todos.length}</h3>
        </div>
    )
}