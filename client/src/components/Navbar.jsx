import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav class="bg-white border-black-200 text-black drop-shadow-2xl fixed top-0 left-0 right-0 z-50">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap "><Link to="/">Our Tech Community</Link></span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-black-200 dark:text-black-400 dark:hover:bg-black-700 dark:focus:ring-black-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-black ">
            <li>
            <a href="#" class="block py-2 px-3 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text:black md:dark:hover:text-blue-500 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/">Home</Link></a>
            </li>
            <li>
            <a href="#" class="block py-2 px-3 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text:black md:dark:hover:text-blue-500 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/upcomingmeet">Upcoming Meet</Link></a>
            </li>
            <li>
            <a href="#" class="block py-2 px-3 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text:black md:dark:hover:text-blue-500 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="">Previous Meet</Link></a>
            </li>
            <li>
            <a href="#" class="block py-2 px-3 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text:black md:dark:hover:text-blue-500 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/setmeet">Set List</Link></a>
            </li>
            <li>
            <a href="#" class="block py-2 px-3 text-black-900 rounded hover:bg-black-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text:black md:dark:hover:text-blue-500 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/meetlist">Meet List</Link></a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    )
}