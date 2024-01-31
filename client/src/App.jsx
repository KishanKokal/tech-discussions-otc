import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from "Components/Home";
import {MeetList} from "Components/MeetList";
import {Setmeet} from "Components/Setmeet";


function App() {
  return (
    <div className='main-body'>
        <NoteState>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/meetlist" element={<MeetList/>} />
              <Route exact path="/setmeet" element={<Setmeet/>} />
            </Routes>
        </Router>
      </NoteState>
    </div>
  )
}

export default App
