
import './App.css'

// Components

function App() {
  return (
    <>
      <h1>React Core Concepts</h1> 
      {/* <Person></Person>    
      <Player></Player> 
      <Sports></Sports> */}

      <Student name='Sabbir' dept='Science'></Student>
      <Student name='Rony' dept='Commerce'></Student>
      {/* <Person></Person> */}
      <Developer name='Naimur' tech='C++'></Developer>
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

function Player(){
  return(
    <h1>Player Details</h1>
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

export default App
