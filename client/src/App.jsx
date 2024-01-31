import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from "./Components/Home";
import {MeetList} from "./Components/MeetList";
import {Setmeet} from "./Components/Setmeet";


function App() {
  return (
    <div className='main-body'>
      <h1>Navbar</h1>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/meetlist" element={<MeetList/>} />
              <Route exact path="/setmeet" element={<Setmeet/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
