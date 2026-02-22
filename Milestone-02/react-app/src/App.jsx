
import './App.css'
import Todo from './Todo';
import Food from './food';
import Actor from './Actor';


// Components

function App() {
  const time = 50;
  const quan = 10;

  const actors = ['hero', 'alam', 'shabana', 'salman'];


  return (
    <>
      <h1>React Core Concepts</h1> 

      {
        actors.map(act => <Actor actor={act}></Actor>)
      }



      {/* <Todo task='Learn React' isDone={true} time={time}></Todo>
      <Todo task='Revise React' isDone={false}></Todo>
      <Todo task='Take a shower' isDone={false} time={time}></Todo>

      <Food name='banana' price='15' quantity={quan}></Food>
      <Food name='mango' price='35' quantity={quan}></Food> */}


      

      {/* <Person></Person>    
      <Player></Player> 
      <Sports></Sports> */}

      {/* <Student name='Sabbir' dept='Science'></Student>
      <Student name='Rony' dept='Commerce'></Student>
      <Player name='Tamim' run='5000'></Player>
      <Developer name='Naimur' tech='C++'></Developer>

      <Player name='Mushi' run='6000'></Player>

      <Salami eid='Eid-Ul-Fitr' taka='10000'></Salami>
      <Salami eid='Eid-Ul-Azha'></Salami> */}
    </>
  )
}

function Person() {
  const age = 18;

  const personStyle = {
    color: 'red' ,
    textAlign: 'right',

  }

  return (

    <p style={personStyle}>I am a Student {age}</p>
  )
}

// Using Destructuring

function Player({name, run}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {run}</p>
    </div>
  )
}



function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Batting</li>
        <li>Bowling</li>
      </ul>
      <h4>Loosing</h4>
    </div>
  )
}

function Student(props){
  // console.log(props);
  
  return(
    <div className='student'> 
      <p>Name: {props.name}</p>
      <p>Department: {props.dept}</p>
    </div>
  )
}

function Developer(dev){
  return(
    <div className='developer'>
      <p>Name: {dev.name}</p>
      <p>Technology: {dev.tech} </p>
    </div>
  )
}


// Using Destructuring

function Salami({eid, taka=0}){
  return(
    <div className='developer'>
      <p>Eid Name: {eid}</p>
      <p>Amount: {taka}</p>
    </div>
  )
}

export default App
