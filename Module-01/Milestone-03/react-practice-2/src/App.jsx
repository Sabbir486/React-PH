
import { Suspense } from 'react'
import './App.css'
import Todos from './Todos'

const fetchTodos = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())


function App() {


  return (
    <>
    
      <Suspense fallback={<h3>Todos are COMING</h3>}>
        <Todos fetchTodos = {fetchTodos}></Todos>
      </Suspense>
      
    </>
  )
}

export default App
