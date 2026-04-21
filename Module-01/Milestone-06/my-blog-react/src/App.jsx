import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'


function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog])  

  }

  const handleMarkAsRead = (time) => {
    const newTime = (readTime + time);
    setReadTime(newTime);
        
  }

  // console.log(bookmarked);
  console.log(readTime);
  
  
  

  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          
          <Blogs handleBookmark = {handleBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        </div>

        <div className="right-container w-[30%]">
          <h1>Reading time: {readTime}</h1>
          <h1>Bookmarked Count: {bookmarked.length}</h1>

          {
            bookmarked.map(marked => <p className='bg-amber-300 p-2 m-3 text-white'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
