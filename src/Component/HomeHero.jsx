// eslint-disable-next-line no-unused-vars
import React from 'react'

const HomeHero = () => {
  return (
<section
  className="flex items-center flex-1 bg-cover bg-center min-h-screen "
  style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
>
  
<div className="flex flex-col w-full relative  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-70 p-[10rem] rounded-lg">
    <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
      <span className="text-gray-100 ">
        Travel With Us
      </span>
    </h1>

    <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-100 dark:text-gray-200 md:text-xl italic">
      Discover the world with exclusive travel deals and unforgettable experiences.
    </p>
    <div className="Tabs flex flex-wrap gap-3 items-center justify-center mt-5">
          <button className='p-2 bg-white text-red-600 font-semibold rounded-md  active:'> Hotels </button>
          <button className='p-2 bg-gray-100 bg-opacity-10 text-white'> Flights </button>
          <button className='p-2  bg-gray-100 bg-opacity-10 text-white '> Tour </button>
          <button className='p-2 bg-gray-100 bg-opacity-10 text-white'> Cab </button>
    </div>

    <form className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
     
      <input
        id="destination"
        type="text"
        className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2 mb-3 sm:mb-0"
        placeholder="Destination"
        required
      />
      <input
        id="departure-date"
        type="date"
        className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2 mb-3 sm:mb-0"
        placeholder="Departure Date"
        required
      />
      <input
        id="return-date"
        type="date"
        className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2 mb-3 sm:mb-0"
        placeholder="Return Date"
        required
      />
      <input
        id="travelers"
        type="number"
        className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2 mb-3 sm:mb-0"
        placeholder="Number of Travelers"
        required
      />
      <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2 mb-3 sm:mb-0">
         Search
      </button>
    </form>

   
  </div>
</section>

  )
}

export default HomeHero