import React from "react";
import {UpcomingMeetCard} from "./UpcomingMeetCard"

export const UpcomingMeet = () => {
    return (
        <div className="pt-16 bg-cyan-500">
            <div className="h-screen">
                <UpcomingMeetCard/>
                <UpcomingMeetCard/>
            </div>
            
        </div>
    )
}