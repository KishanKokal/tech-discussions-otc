import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from "./Components/Home";
import {MeetList} from "./Components/MeetList";
import {Setmeet} from "./Components/Setmeet";
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className='main-body'>
      <Navbar/>
      <div>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/meetlist" element={<MeetList/>} />
              <Route exact path="/setmeet" element={<Setmeet/>} />
            </Routes>
        </Router>
        <Footer/>
      </div>
    </div>
  )
}

export default App
