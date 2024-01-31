import { useState, useRef, useEffect } from 'react';
import '../App1.css';

export const Setmeet = () => {
  return (
    <div className="home-div">
      <div className="content-left">
        <h2 className="content-header">Creat Meet Link</h2>
        <div className="content-para">Please fill all the necessary details. You can then find this event in upcoming list.</div>
      </div>
      <div className="form-right">
        <input type="text" className="input-fname inp" placeholder="Title"/>
        <input type="text" className="input-lname inp" placeholder="Description" />
        <input type="date" className="input-email inp pr-5" placeholder="Date" />
        <input type="time" className="input-email inp pr-5" placeholder="Date" />
        <input type="text" className="input-roomname inp" placeholder="Meet Link" />
        <button className="input-btn">Click to create Meet</button>
      </div>
      
    </div>
  );
}

