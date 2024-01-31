import { useState, useRef, useEffect } from 'react';
import '../App1.css';
import axios from 'axios';

export const Setmeet = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    meetdate: '',
    time: '',
    link: '',
  });
  const [meetCreated, setMeetCreated] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('http://localhost:3000/upcomingEvents', formData);
      setMeetCreated(true);
        setFormData({
          title: '',
          description: '',
          meetdate: '',
          time: '',
          link: '',
        });
        formRef.current.reset();
        console.log("data sent")
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="home-div pt-16">
      <div className="content-left">
        <h2 className="content-header">Creat Meet Link</h2>
        <div className="content-para">Please fill all the necessary details. You can then find this event in upcoming list.</div>
      </div>
      <form className="form-right" ref={formRef}>
        <input type="text" className="input-fname inp" placeholder="Title" name="title" onChange={handleChange}/>
        <input type="text" className="input-lname inp" placeholder="Description" name="description" onChange={handleChange} />
        <input type="date" className="input-email inp pr-5" placeholder="Date" name="meetdate" onChange={handleChange}/>
        <input type="time" className="input-email inp pr-5" placeholder="Date" name="time" onChange={handleChange}/>
        <input type="text" className="input-roomname inp" placeholder="Meet Link" name="link" onChange={handleChange}/>
        <button className="input-btn" onClick={handleSubmit}>Click to create Meet</button>
        {meetCreated && <div className="meet-created-message text-center text-lime-800">Meet Created</div>}
      </form>
    </div>
  );
}

