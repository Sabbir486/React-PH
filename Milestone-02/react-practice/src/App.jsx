
import './App.css'
import Food from './Food';
import Friends from './Friends';

function App() {
  const quantity = 10;
  const friends = ['ab', 'cd', 'ef', 'gh'];

  return (
    <>      
      <h1>Vite + React</h1>

      {
        friends.map(friend => <Friends friend = {friend}></Friends>)
      }

      <Food name='banana' price='100' quantity={quantity}></Food>
      <Food name='mango' price='120' quantity={quantity}></Food>
      <Food name='jackfruit' price='80' quantity={quantity}></Food>
      
    </>
  )
}

export default App
