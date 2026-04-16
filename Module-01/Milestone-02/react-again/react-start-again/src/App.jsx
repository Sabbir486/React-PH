
import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person() {
  const name = 'John';
  const age = 30;

  return (
    <p>I am {name} and I am {age} years old.</p>
  )
}

function Student() {
  // const name = 'Alice';
  // const age = 20;
  // const grade = 'A';

  return (
    <div className="Student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
