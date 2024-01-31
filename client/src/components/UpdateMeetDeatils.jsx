import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactMediaRecorder } from 'react-media-recorder';

export const UpdateMeetDeatils = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const name = "OTC CATCH UP #3"
    return (
        <div className='bg-cyan-500'>
        <div className='pt-16  h-screen'>
            <h1 className='text-center font-bold text-3xl m-5 text-white'>{name}</h1>
            <div class="border-b border-white mb-4 w-1/2 m-auto"></div>
            <ReactMediaRecorder
                screen
                render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                    <div>
                    <p className='text-center text-black font-bold'>Status : {status}</p>
                    <div className='flex justify-evenly'> 
                        <button
                            onClick={startRecording}
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            >
                            Start Recording
                        </button>
                        <button
                            onClick={stopRecording}
                            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            >
                            Stop Recording
                    </button>
                    </div>
                        <video src={mediaBlobUrl} controls autoPlay loop className='w-1/2 m-auto my-5'/>
                    </div>
                )}
                />
        </div>
        </div>
    )
}