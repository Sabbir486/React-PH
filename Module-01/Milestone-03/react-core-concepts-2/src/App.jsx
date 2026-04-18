
import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Users from './Users';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
.then(data => console.log(data))


function App() {
  
  function handleClick() {
    alert('Button Clicked!')
  }

  const handleClick2 = () => {
    alert('Button Clicked for 3 times!')
  }

  const handleAdd = (num) => {
    const newNum = num + 5
    alert(newNum)
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Counter></Counter>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>



      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me 2</button>

      <button onClick={() => alert('Button Clicked for 4 times!')}>Click Me 3</button>

    {/* Special */}
      <button onClick={() => handleAdd(10)}>Click Me 4</button>
    </>
  )
}

export default App
