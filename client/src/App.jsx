import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Home} from "./Components/Home";
import {MeetList} from "./Components/MeetList";
import {Setmeet} from "./Components/Setmeet";
import { Navbar } from './Components/Navbar';
import { UpdateMeetDeatils } from './Components/UpdateMeetDeatils';
import { Footer } from './Components/Footer';
import { UpcomingMeet } from './Components/UpcomingMeet';


function App() {
  return (
    <div className='main-body'>
      <div>
        <Router>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/meetlist" element={<MeetList/>} />
              <Route exact path="/setmeet" element={<Setmeet/>} />
              <Route exact path="/updatemeetdetails" element={<UpdateMeetDeatils/>} />
              <Route exact path="/upcomingmeet" element={<UpcomingMeet/>} />
            </Routes>
        </Router>
        <Footer/>
      </div>
    </div>
  )
}

export default App
