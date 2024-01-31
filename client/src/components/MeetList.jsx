import React from 'react'
import { Cards } from './Cards'

export const MeetList = () => {
  const ApiData = [
    {
      title : "OTC Catchup #5", 
      desciption : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id : 123
    },
    {
      title : "OTC Catchup #6", 
      desciption : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id : 123
    },
    {
      title : "OTC Catchup #7", 
      desciption : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id : 123
    }
  ]
  return (
    <>
      <h2 className="text-2xl text-cyan-500 font-bold ml-20 my-4">Meet List</h2>
      <div class="border-b border-cyan-500 m-2 w-1/2 ml-16 mb-4"></div>
    <div className='flex justify-around'>
      <Cards data={ApiData[0]}/>
      <Cards data={ApiData[1]}/>
      <Cards data={ApiData[2]}/>

    </div>
    </>
  )
}
