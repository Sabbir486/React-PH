
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="main-container ">
        <div className="left-container left">
          <div className="heading">
            <p>Active Auctions</p>
            <p>Discover and bid on extraordinary items</p>
          </div>
          <Blogs></Blogs>
        </div>

        <div className="right-container">

        </div>
      </div>
    </>
  )
}

export default App
