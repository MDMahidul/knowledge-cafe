import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';

function App() {

  return (
    <>
      <Header></Header>
      <hr></hr>
     
         <Cards></Cards>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
