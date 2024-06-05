/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import Registertion from "../Authentication/Registertion";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import icon from "../../public/vite.svg"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { logOut, user } = useAuth();

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };


  


  const handleLogout = async()=>{
    await logOut()
    .then(() => {
      toast.success('Successfully created!');
      window.location.reload();
    })
    .catch(error => {
      console.error('Error signing out:', error);
    });
  }
  

  return (
    <div className="w-full bg-transparent sm:bg-transparent -z-50 ">
      <div className="relative flex flex-col  z-50  mx-auto">
        <nav className="p-3 bg-transparent md:flex md:items-center md:justify-between absolute top-0 left-0 right-0 w-[100%] z-4 border-b">
          <div className="flex items-center justify-between ml-10">
            <button
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white bg-black rounded-full md:hidden dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400 focus:outline-none font-bold text-2xl"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              )}
            </button>

            <Link to="/" className="font-bold text-white text-xl flex gap-1">
              <img src={icon} alt="" width={30} height={44} className="rounded-md"/>
              TrackingTravel
            </Link>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:mx-5 md:flex md:items-center ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
            <Link
              to="/"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              to="/BuyRentCar"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Rent Car
            </Link>
            <Link
              to="#"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Destination
            </Link>
            <Link
              to="/dashboard"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Dashboard
            </Link>
            <Link
              to="#"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Blog
            </Link>
            <Link
              to="#"
              className="block md:text-gray-100 transition-colors duration-300 dark:text-white md:px-4 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Contact
            </Link>
            <div className="block md:flex justify-center items-center md:ml-36 space-y-3 md:space-y-0">
              <button className="block font-medium text-md px-5 md:bg-gray-100 bg-opacity-10 md:text-gray-700">BD</button>
              <button className="block font-bold text-xl mx-2 px-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="48" height="34">
                  <path fill="#006a4e" d="M0 0h20v12H0z" />
                  <circle cx="9" cy="6" r="4" fill="#f42a41" />
                </svg>
              </button>

              <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {user ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="inline-block rounded-full bg-white px-5 py-3 text-center font-bold text-black transition hover:border-black hover:bg-blue-500 hover:text-white"
              >
                Log Out
              </button>

              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
              <div className="w-12 h-12 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img 
                    src={user?.photoURL || `/assets/profile-pic (3).png`} 
                    className="object-cover w-full h-full" 
                    alt="avatar"
                  
                  />
                </div>
                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{}</h3>
              </button>
            </div>
          ) : (
            <span onClick={handleOpenEditModal} className="px-4 flex gap-2 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2 mb-3 sm:mb-0">
              <CgProfile className="mt-1" size={15} />
              <h1>Sign In / Register</h1>
            </span>
          )}
        </div>
      </div>
          </div>
        </nav>

        {showEditModal && <Registertion handleCloseEditModal={handleCloseEditModal} />}
      
        
      </div>
    </div>
  );
};

export default Navbar;

