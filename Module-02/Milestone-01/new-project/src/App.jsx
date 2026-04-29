
import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

const pricingPromise = fetch('pricing.json').then(res => res.json())

function App() {
  

  return (
    <>     
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <Navbar></Navbar>
        
      </header>

      <main>
        <Suspense fallback = {<span className="loading loading-dots loading-md"></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>
      </main>
    </>
  )
}

export default App
