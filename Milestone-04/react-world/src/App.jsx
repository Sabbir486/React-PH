
import { Suspense } from 'react';
import './App.css'
import Countries from './component/Countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,flags').then(res => res.json());

function App() {

  return (
    <>      
      <Suspense fallback={<h3>Result is coming...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
