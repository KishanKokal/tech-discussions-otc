import React from 'react'
import meetimg from "../assets/meetimg.jpg"
import { Link } from 'react-router-dom';

export const Cards = (props) => {
    const {title, desciption, id} = props.data;
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl">
    <a href="#">
        <img class="rounded-t-lg" src={meetimg} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-black">{desciption}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#38cc8c] rounded-lg">
            <Link to={`/updatemeetdetails?id=100`}>Read more</Link>
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}
