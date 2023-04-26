import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';

function App() {


  return (
    <>
      <Header></Header>
      <hr></hr>
      <div className="row">
        <div className="col-md-8">
         <Cards></Cards>
        </div>
        <div className="col-md-4 card">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
