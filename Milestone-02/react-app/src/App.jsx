
import './App.css'

// Components

function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Person></Person>    
      <Player></Player> 
      <Sports></Sports>
    </>
  )
}

function Person() {
  const age = 18;

  return (

    <p>I am a Student {age}</p>
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

export default App
