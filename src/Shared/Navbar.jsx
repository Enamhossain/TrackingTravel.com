/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Registertion from "../Authentication/Registertion";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import icon from "../assets/Icon.png";
import { FaBlog, FaCarAlt, FaCaretDown, FaChartLine, FaHome, FaPhoneAlt, FaPlane, FaBiking, FaShip } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [rentDropdown, setRentDropdown] = useState(false);
  const [mobileRentDropdown, setMobileRentDropdown] = useState(false);
  const { logOut, user } = useAuth();
  const menuRef = useRef();
  const rentRef = useRef();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (rentRef.current && !rentRef.current.contains(event.target)) {
        setRentDropdown(false);
      }
    }
    
    if (rentDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [rentDropdown]);

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setRentDropdown(false);
        setMobileRentDropdown(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
    setIsOpen(false); // Close mobile menu when opening modal
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Successfully logged out!");
      setIsOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
    setMobileRentDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(prev => !prev);
    setMobileRentDropdown(false);
  };

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-blue-700 shadow-lg fixed top-0 left-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white hover:opacity-90 transition-opacity">
          <img src={icon} alt="Logo" width={32} height={32} className="rounded-md bg-white/80 p-1" />
          <span className="hidden xs:block">TrackingTravel</span>
          <span className="block xs:hidden">TT</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link to="/" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200">
            <FaHome className="mr-2" />Home
          </Link>
          <div className="relative" ref={rentRef}>
            <button
              className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-haspopup="true"
              aria-expanded={rentDropdown}
              aria-controls="rent-dropdown-menu"
              onClick={() => setRentDropdown(prev => !prev)}
              onMouseEnter={() => setRentDropdown(true)}
              onMouseLeave={() => setRentDropdown(false)}
            >
              Rent <FaCaretDown className={`ml-1 transition-transform duration-200 ${rentDropdown ? 'rotate-180' : ''}`} />
            </button>
            {/* Desktop Dropdown */}
            <div
              id="rent-dropdown-menu"
              className={`absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-xl py-2 z-30 transition-all duration-200 ease-in-out ${
                rentDropdown 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={() => setRentDropdown(true)}
              onMouseLeave={() => setRentDropdown(false)}
              role="menu"
              aria-label="Rent options"
            >
              <div className="px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                Vehicles
              </div>
              <Link to="/BuyRentCar" className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition duration-200" role="menuitem">
                <FaCarAlt className="mr-3 text-blue-600" />Car
              </Link>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition duration-200" role="menuitem">
                <FaBiking className="mr-3 text-green-600" />Bike
              </a>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition duration-200" role="menuitem">
                <FaShip className="mr-3 text-indigo-600" />Boat
              </a>
              <div className="px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 mt-2">
                Properties
              </div>
              <a href="#" className="flex items-center px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition duration-200" role="menuitem">
                <FaHome className="mr-3 text-yellow-600" />Property
              </a>
            </div>
          </div>
          <Link to="/destination" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200">
            <FaPlane className="mr-2" />Destination
          </Link>
          <Link to="/dashboard" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200">
            <FaChartLine className="mr-2" />Dashboard
          </Link>
          <Link to="#" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200">
            <FaBlog className="mr-2" />Blog
          </Link>
          <Link to="/contact" className="flex items-center px-3 py-2 rounded hover:bg-blue-600/40 text-white transition duration-200">
            <FaPhoneAlt className="mr-2" />Contact
          </Link>
        </div>

        {/* Right Side (User/Language) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-3 py-2 rounded bg-white/20 text-white font-medium border border-white/30 hover:bg-white/30 transition duration-200">
            BD
          </button>
          <button className="p-1 rounded hover:bg-white/20 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="32" height="20" className="rounded">
              <path fill="#006a4e" d="M0 0h20v12H0z" />
              <circle cx="9" cy="6" r="4" fill="#f42a41" />
            </svg>
          </button>
          {user ? (
            <div className="flex items-center gap-3">
              <button 
                onClick={handleLogout} 
                className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Log Out
              </button>
              <button 
                type="button" 
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full" 
                aria-label="Profile"
              >
                <div className="w-10 h-10 overflow-hidden border-2 border-white rounded-full bg-white/80 hover:border-blue-300 transition duration-200">
                  <img src={user?.photoURL || `/assets/profile-pic (3).png`} className="object-cover w-full h-full" alt="avatar" />
                </div>
              </button>
            </div>
          ) : (
            <button 
              onClick={handleOpenEditModal} 
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <CgProfile size={18} />Sign In/Register
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-blue-700/80 hover:bg-blue-800/80 transition duration-200"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-6 relative">
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2.5 rotate-45' : 'top-1'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-2.5'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2.5 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900 dark:from-gray-900 dark:via-blue-900 dark:to-blue-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-bold text-lg text-white hover:opacity-90 transition-opacity" 
            onClick={handleMobileNavClick}
          >
            <img src={icon} alt="Logo" width={28} height={28} className="rounded-md bg-white/80 p-1" />
            TrackingTravel
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white bg-blue-700/80 hover:bg-blue-800/80 transition duration-200" 
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col px-4 py-4 space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 active:bg-blue-600/60" 
            onClick={handleMobileNavClick}
          >
            <FaHome className="mr-3" />Home
          </Link>

          {/* Mobile Rent Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setMobileRentDropdown(prev => !prev)}
            >
              <div className="flex items-center">
                Rent
              </div>
              <FaCaretDown className={`transition-transform duration-200 ${mobileRentDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileRentDropdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 mt-2 space-y-1">
                <div className="px-3 py-2 text-xs font-semibold text-blue-200 uppercase tracking-wider">
                  Vehicles
                </div>
                <Link 
                  to="/BuyRentCar" 
                  className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-500/30 text-white transition duration-200 active:bg-blue-500/50" 
                  onClick={handleMobileNavClick}
                >
                  <FaCarAlt className="mr-3 text-blue-400" />Car
                </Link>
                <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-500/30 text-white transition duration-200 active:bg-blue-500/50">
                  <FaBiking className="mr-3 text-green-400" />Bike
                </a>
                <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-500/30 text-white transition duration-200 active:bg-blue-500/50">
                  <FaShip className="mr-3 text-indigo-400" />Boat
                </a>
                <div className="px-3 py-2 text-xs font-semibold text-blue-200 uppercase tracking-wider mt-2">
                  Properties
                </div>
                <a href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-500/30 text-white transition duration-200 active:bg-blue-500/50">
                  <FaHome className="mr-3 text-yellow-400" />Property
                </a>
              </div>
            </div>
          </div>

          <Link 
            to="/destination" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 active:bg-blue-600/60" 
            onClick={handleMobileNavClick}
          >
            <FaPlane className="mr-3" />Destination
          </Link>
          <Link 
            to="/dashboard" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 active:bg-blue-600/60" 
            onClick={handleMobileNavClick}
          >
            <FaChartLine className="mr-3" />Dashboard
          </Link>
          <Link 
            to="#" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 active:bg-blue-600/60"
          >
            <FaBlog className="mr-3" />Blog
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-600/40 text-white transition duration-200 active:bg-blue-600/60" 
            onClick={handleMobileNavClick}
          >
            <FaPhoneAlt className="mr-3" />Contact
          </Link>

          {/* Mobile Language/Country Selection */}
          <div className="flex items-center gap-3 px-4 py-3 mt-4 border-t border-white/20">
            <button className="px-3 py-2 rounded-lg bg-white/20 text-white font-medium border border-white/30 hover:bg-white/30 transition duration-200">
              BD
            </button>
            <button className="p-1 rounded hover:bg-white/20 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="32" height="20" className="rounded">
                <path fill="#006a4e" d="M0 0h20v12H0z" />
                <circle cx="9" cy="6" r="4" fill="#f42a41" />
              </svg>
            </button>
          </div>

          {/* Mobile User Section */}
          <div className="px-4 py-3 border-t border-white/20 mt-4">
            {user ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleLogout} 
                  className="flex-1 px-4 py-3 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Log Out
                </button>
                <button 
                  type="button" 
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full" 
                  aria-label="Profile"
                >
                  <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full bg-white/80 hover:border-blue-300 transition duration-200">
                    <img src={user?.photoURL || `/assets/profile-pic (3).png`} className="object-cover w-full h-full" alt="avatar" />
                  </div>
                </button>
              </div>
            ) : (
              <button 
                onClick={handleOpenEditModal} 
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <CgProfile size={18} />Sign In/Register
              </button>
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