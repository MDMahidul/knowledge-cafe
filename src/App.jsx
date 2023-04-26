import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [bookmarked,setbookmarked] = useState([0]);
  const [countBookmark,setCountBookmark] = useState([])

  const handleBookMarked = (id) =>{
    const existingIds = JSON.parse(localStorage.getItem('blogIds')) || [];
    if (!existingIds.includes(id)) {
      const updatedIds = [...existingIds, id];
      localStorage.setItem('blogIds', JSON.stringify(updatedIds));
      setbookmarked(updatedIds)
    }else{
      toast("Already Bookmarked !");
    }
  }

  useEffect(()=>{
    const count = JSON.parse(localStorage.getItem('blogIds')) || [];
    setCountBookmark(count.length);
    console.log(countBookmark)
  },[bookmarked])

  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="row">
        <div className="col-md-8">
         <Cards handleBookMarked={handleBookMarked}></Cards>
        </div>
        <div className="col-md-4 card">
          <Sidebar bookmarked={bookmarked} countBookmark={countBookmark}></Sidebar>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
