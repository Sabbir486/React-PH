
import './App.css'
import Counter from './Counter';
import Player from './Player';
import Bowler from './Bowler';


function App() {

  function handleClick(){
    alert('I am Clicked');
  }

  const handleClick3 = () => {
    alert('I am clicked again');
  }

  const handleAdd5 =(num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>      
      <h3>Vite + React</h3>

      <Counter></Counter>

      <Player></Player>

      <Bowler></Bowler>

      {/* <button onClick='handleClick()'>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick3}>Click Me 2</button>

      <button onClick={() => alert('Click 4 time')}> Click 4 time</button>


      {/* Pass the Parameter */}

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
      
    </>
  )
}

export default App
