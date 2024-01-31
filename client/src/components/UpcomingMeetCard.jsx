import React from "react";

export const UpcomingMeetCard = () => {
    return (
        <div class="mx-auto w-3/4 bg-white shadow-lg p-6 mb-8 rounded-md my-10">
                    <h2 class="text-2xl font-bold mb-4">Meeting Title</h2>
                    <p class="text-gray-700 mb-4">Meeting Description goes here. Provide relevant details about the meeting.</p>
                    <div class="flex items-center text-gray-600 mb-4">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                        <span>Date: January 1, 2023</span>
                    </div>
                    <div class="flex items-center text-gray-600 mb-4">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span>Time: 2:00 PM - 3:00 PM</span>
                    </div>
                    <a href="meet-link" class="text-blue-500 hover:underline">Join Meeting</a>
                </div>
    )
}