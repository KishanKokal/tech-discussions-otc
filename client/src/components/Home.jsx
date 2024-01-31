import React from 'react'
import { ReactTyped } from "react-typed";
import meeting_svg from "../assets/meeting_svg.svg"

export const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen max-md:flex-col bg-cyan-500">
                {/* Left Part - Photo */}
                <div className="flex-1 p-4 flex items-center justify-center">
                    <img
                        src={meeting_svg} // Replace with your actual photo source
                        alt="Your Photo"
                        className="w-80 h-auto max-md:w-60"
                    />
                </div>

                {/* Right Part - Name and Description */}
                <div className="flex-1 p-4">
                    <div className="text-white h-screen flex items-center justify-center flex-col p-20  max-md:h-1/2 max-md:p-0">
                            <h1 className="text-4xl font-bold mb-4 max-md:text-3xl">
                            <ReactTyped
                                    strings={["Our Tech Community"]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                />
                            </h1>
                        <div className="w-full">
                            <p className="text-2xl text-center mb-4 max-md:text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae tenetur at reprehenderit repellendus excepturi dignissimos autem unde deserunt ratione?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  )
}
