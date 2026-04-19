import './App.css'
import { use } from 'react';
import Todo from './Todo';


export default function Todos({fetchTodos}){

    const todos = use(fetchTodos);
    console.log(todos);
    

    return(
        <div>
            <h3>Title: {todos.length}</h3>

            {
                todos.map(todo => <Todo key={todo.id} todo = {todo}></Todo>)
            }
        </div>
    )
}