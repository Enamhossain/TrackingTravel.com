/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Registertion from "../Authentication/Registertion";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import icon from "../assets/Icon.png";
import { FaBlog, FaCarAlt, FaCaretDown, FaChartLine, FaHome, FaPhoneAlt, FaPlane } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [rentDropdown, setRentDropdown] = useState(false);
  const { logOut, user } = useAuth();
  const menuRef = useRef();
  const rentRef = useRef();

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (rentRef.current && !rentRef.current.contains(event.target)) {
        setRentDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Successfully logged out!");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-blue-700 shadow-lg fixed top-0 left-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <img src={icon} alt="Logo" width={32} height={32} className="rounded-md bg-white/80 p-1" />
          TrackingTravel
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link to="/" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition"><FaHome className="mr-2" />Home</Link>
          <div className="relative" ref={rentRef}>
            <button
              className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={rentDropdown}
              onClick={() => setRentDropdown((prev) => !prev)}
              onMouseEnter={() => setRentDropdown(true)}
              onMouseLeave={() => setRentDropdown(false)}
            >
              Rent <FaCaretDown className="ml-1" />
            </button>
            {/* Dropdown */}
            {rentDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded shadow-lg py-2 z-30">
                <Link to="/BuyRentCar" className="flex items-center px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"><FaCarAlt className="mr-2" />Car</Link>
                <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"><FaHome className="mr-2" />Property</a>
              </div>
            )}
          </div>
          <Link to="/destination" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition"><FaPlane className="mr-2" />Destination</Link>
          <Link to="/dashboard" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition"><FaChartLine className="mr-2" />Dashboard</Link>
          <Link to="#" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition"><FaBlog className="mr-2" />Blog</Link>
          <Link to="/contact" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition"><FaPhoneAlt className="mr-2" />Contact</Link>
        </div>
        {/* Right Side (User/Language) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <button className="px-3 py-2 rounded bg-white/20 text-white font-medium border border-white/30">BD</button>
          <button className="px-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="32" height="20"><path fill="#006a4e" d="M0 0h20v12H0z" /><circle cx="9" cy="6" r="4" fill="#f42a41" /></svg></button>
          {user ? (
            <div className="flex items-center gap-2">
              <button onClick={handleLogout} className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition">Log Out</button>
              <button type="button" className="flex items-center focus:outline-none" aria-label="Profile">
                <div className="w-10 h-10 overflow-hidden border-2 border-white rounded-full bg-white/80">
                  <img src={user?.photoURL || `/assets/profile-pic (3).png`} className="object-cover w-full h-full" alt="avatar" />
                </div>
              </button>
            </div>
          ) : (
            <button onClick={handleOpenEditModal} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"><CgProfile size={18} />Sign In/Register</button>
          )}
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none text-white bg-blue-700/80 hover:bg-blue-800/80 transition"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
          )}
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden transition-opacity" aria-hidden="true"></div>
      )}
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-blue-700 shadow-2xl rounded-r-2xl z-50 transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-white" onClick={() => setIsOpen(false)}>
            <img src={icon} alt="Logo" width={28} height={28} className="rounded-md bg-white/80 p-1" />
            TrackingTravel
          </Link>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded focus:outline-none text-white bg-blue-700/80 hover:bg-blue-800/80 transition" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-4 py-6">
          <Link to="/" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white" onClick={() => setIsOpen(false)}><FaHome className="mr-2" />Home</Link>
          <div className="relative">
            <button
              className="flex items-center w-full px-3 py-2 rounded hover:bg-blue-600/40 text-white focus:outline-none"
              aria-haspopup="true"
              aria-expanded={rentDropdown}
              onClick={() => setRentDropdown((prev) => !prev)}
            >
              Rent <FaCaretDown className="ml-1" />
            </button>
            {rentDropdown && (
              <div className="ml-4 mt-1 flex flex-col gap-1">
                <Link to="/BuyRentCar" className="flex items-center px-3 py-2 rounded hover:bg-blue-500/30 text-white" onClick={() => setIsOpen(false)}><FaCarAlt className="mr-2" />Car</Link>
                <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-blue-500/30 text-white"><FaHome className="mr-2" />Property</a>
              </div>
            )}
          </div>
          <Link to="/destination" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white" onClick={() => setIsOpen(false)}><FaPlane className="mr-2" />Destination</Link>
          <Link to="/dashboard" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white" onClick={() => setIsOpen(false)}><FaChartLine className="mr-2" />Dashboard</Link>
          <Link to="#" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white"><FaBlog className="mr-2" />Blog</Link>
          <Link to="/contact" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white" onClick={() => setIsOpen(false)}><FaPhoneAlt className="mr-2" />Contact</Link>
          <div className="flex items-center gap-2 mt-4">
            <button className="px-3 py-2 rounded bg-white/20 text-white font-medium border border-white/30">BD</button>
            <button className="px-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="32" height="20"><path fill="#006a4e" d="M0 0h20v12H0z" /><circle cx="9" cy="6" r="4" fill="#f42a41" /></svg></button>
          </div>
          <div className="mt-4">
            {user ? (
              <div className="flex items-center gap-2">
                <button onClick={handleLogout} className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition">Log Out</button>
                <button type="button" className="flex items-center focus:outline-none" aria-label="Profile">
                  <div className="w-10 h-10 overflow-hidden border-2 border-white rounded-full bg-white/80">
                    <img src={user?.photoURL || `/assets/profile-pic (3).png`} className="object-cover w-full h-full" alt="avatar" />
                  </div>
                </button>
              </div>
            ) : (
              <button onClick={handleOpenEditModal} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"><CgProfile size={18} />Sign In/Register</button>
            )}
          </div>
        </div>
      </div>
      {/* Modal for Register/Sign In */}
      {showEditModal && <Registertion handleCloseEditModal={handleCloseEditModal} />}
    </header>
  );
};

export default Navbar;
