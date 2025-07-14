// eslint-disable-next-line no-unused-vars
import React from 'react'

const HomeHero = () => {
  return (
<section
  className="relative flex items-center flex-1 bg-cover bg-center min-h-screen px-4 sm:px-8"
  style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1678727128546-154b1725c336?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
  <div className="flex flex-col w-full relative z-10 bg-opacity-20 dark:bg-opacity-70 p-4 sm:p-8 md:p-16 rounded-lg">
    <h1 className="text-3xl sm:text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl drop-shadow-lg">
      <span className="block text-gray-100 text-lg sm:text-xl md:text-5xl">
        Travel <span className="text-blue-400 to-blue-800">With Us</span>
      </span>
    </h1>
    <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-center text-gray-100 dark:text-gray-200 md:text-xl italic drop-shadow">
      Discover the world with exclusive travel deals and unforgettable experiences.
    </p>
    <div className="Tabs flex flex-wrap gap-3 items-center justify-center mt-5">
      <button className="p-2 bg-white text-red-600 font-semibold rounded-md shadow hover:bg-red-100 transition">Hotels</button>
      <button className="p-2 bg-gray-100 bg-opacity-10 text-white hover:bg-blue-500 hover:bg-opacity-30 transition">Flights</button>
      <button className="p-2 bg-gray-100 bg-opacity-10 text-white hover:bg-blue-500 hover:bg-opacity-30 transition">Tour</button>
      <button className="p-2 bg-gray-100 bg-opacity-10 text-white hover:bg-blue-500 hover:bg-opacity-30 transition">Cab</button>
    </div>
    {/* Modern Search Form */}
    <form className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-2xl flex flex-col mt-10 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:gap-3 w-full max-w-3xl mx-auto p-4 sm:p-2 items-center">
      <div className="relative w-full sm:w-auto flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="7"/></svg>
        </span>
        <input
          id="destination"
          type="text"
          className="pl-10 pr-3 py-2 sm:py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 bg-white/80 placeholder-gray-400 transition"
          placeholder="Destination"
          required
        />
      </div>
      <div className="relative w-full sm:w-auto flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"/></svg>
        </span>
        <input
          id="departure-date"
          type="date"
          className="pl-10 pr-3 py-2 sm:py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 bg-white/80 placeholder-gray-400 transition"
          placeholder="Departure Date"
          required
        />
      </div>
      <div className="relative w-full sm:w-auto flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"/></svg>
        </span>
        <input
          id="return-date"
          type="date"
          className="pl-10 pr-3 py-2 sm:py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 bg-white/80 placeholder-gray-400 transition"
          placeholder="Return Date"
          required
        />
      </div>
      <div className="relative w-full sm:w-auto flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z"/></svg>
        </span>
        <input
          id="travelers"
          type="number"
          className="pl-10 pr-3 py-2 sm:py-3 w-full rounded-lg border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 bg-white/80 placeholder-gray-400 transition"
          placeholder="Number of Travelers"
          required
        />
      </div>
      <button className="px-6 py-3 text-base font-semibold tracking-wide text-white capitalize transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 min-w-fit mt-2 sm:mt-0">
        <span className="flex items-center gap-2">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="7"/></svg>
          Search
        </span>
      </button>
    </form>
  </div>
</section>


  )
}

export default HomeHero