
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'
// import { add, diff, mult, divide as div } from './utils/math/math'

const bottlesPromise = fetch('./bottles.json').then(res => res.json());

function App() {


  // const sum = add(5,20);
  // // console.log(sum);

  // const sub = diff(20,5);

  // const multi = mult(5,5);

  // const divide = 9/3;

  // const division = div(25,5);

  // console.log(sum, sub, multi, divide, division);

  // const bottles = [
  //   {id: 1, name: 'Sa', price: 100, color: 'pink'},
  //   {id: 2, name: 'Ra', price: 200, color: 'Rink'},
  //   {id: 3, name: 'Ta', price: 300, color: 'Mink'},
  //   {id: 4, name: 'Ba', price: 400, color: 'Bink'},
  //   {id: 5, name: 'Ca', price: 500, color: 'Cink'},
  // ]
  
  

  return (
    <>      
      <h1>React Discussion</h1>

      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
      
    </>
  )
}

export default App
