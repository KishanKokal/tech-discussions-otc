import React, {useEffect, useState} from "react";
import {UpcomingMeetCard} from "./UpcomingMeetCard"
import axios from "axios";

export const UpcomingMeet = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    useEffect(() => {
        // Fetch upcoming events when the component mounts
        fetchData();
      }, []);
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/upcomingEvents/get');
            // console.log(response.data) ;           
            setUpcomingEvents(response.data);
        } catch (error) {
            console.log("errrr");
          console.error('Error:', error);
        }
      };
    return (
        <div className="pt-16 bg-cyan-500">
            <div>
            {upcomingEvents.map((event) => (
                // Pass each event as a prop to UpcomingMeetCard component
                <UpcomingMeetCard key={event.id} {...event} />
            ))}
            </div>
            
        </div>
    )
}