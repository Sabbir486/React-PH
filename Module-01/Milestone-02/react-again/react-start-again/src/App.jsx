
import './App.css'
import Todo from './Todo';

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Revise React" isDone={true}></Todo>


      {/* <Person></Person>
      <Student></Student>
      <Developer name="Alice" language="JavaScript"></Developer>
      <Developer name="Bob" language="Python"></Developer>
      <Player name="Tamim" runs="10000"></Player> */}
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

function Developer(props) {
  return (
    <div className="Developer">
      <p>Name: {props.name}</p>
      <p>Language: {props.language}</p>
    </div>
  )
}

function Player({name, runs}) {

  return (
    <div className="Student">
      <p>Name: {name}</p>
      <p>Runs: {runs}</p>
    </div>
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
