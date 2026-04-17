
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singers';

function App() {

  const actors = ['akshay', 'salman', 'shahrukh', 'amir', 'hrithik'];

  const singers = [
    {id: 1, name: 'Lata Mangeshkar', age: 92},
    {id: 2, name: 'Kishore Kumar', age: 69},
    {id: 3, name: 'Asha Bhosle', age: 88},
    {id: 4, name: 'Mohammed Rafi', age: 68},
    {id: 5, name: 'Mukesh', age: 77}
  ];

  return (
    
    <>
      <h1>React Core Concepts</h1>

      {
        actors.map(actor => <Actor actor = {actor}></Actor>)
      }

      {
        singers.map (singer => <Singer key={singer.id} singer = {singer}></Singer>)
      }



      {/* <Todo task="Learn React" isDone={false}></Todo>
      <Todo task="Revise React" isDone={true}></Todo> */}


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
