/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { FaCarAlt, FaCaretDown, FaChartLine, FaHome, FaBiking } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="w-full h-20 fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-display font-black text-brand-primary tracking-tighter">
              Tracking<span className="text-brand-secondary">Travel</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-sm">
            <Link to="/" className="px-4 py-2 rounded-xl text-sm font-medium text-brand-primary hover:bg-white hover:shadow-sm transition-all">
              Home
            </Link>
            <div className="relative group" ref={rentRef}>
              <button className="px-4 py-2 rounded-xl text-sm font-medium text-brand-primary hover:bg-white hover:shadow-sm transition-all flex items-center gap-1">
                Rentals <FaCaretDown className="text-xs" />
              </button>
              {/* Dropdown with modern styling */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0 p-2">
                <Link to="/BuyRentCar" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <FaCarAlt />
                  </div>
                  <span className="text-sm font-medium">Cars</span>
                </Link>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                    <FaBiking />
                  </div>
                  <span className="text-sm font-medium">Bikes</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <FaChartLine />
                  </div>
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </div>
            </div>
            <Link to="/destination" className="px-4 py-2 rounded-xl text-sm font-medium text-brand-primary hover:bg-white hover:shadow-sm transition-all">
              Destinations
            </Link>
            <Link to="/contact" className="px-4 py-2 rounded-xl text-sm font-medium text-brand-primary hover:bg-white hover:shadow-sm transition-all">
              Support
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
             <button className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white shadow-sm">EN</button>
             <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-brand-primary">BD</button>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-brand-accent transition-colors" onClick={handleLogout}>
                Log out
              </button>
              <div className="w-10 h-10 rounded-full border-2 border-brand-secondary p-0.5 hover:scale-105 transition-transform cursor-pointer">
                <img src={user?.photoURL || `/assets/profile-pic (3).png`} className="w-full h-full rounded-full object-cover" alt="avatar" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login"
                className="hidden sm:block text-sm font-bold text-slate-600 hover:text-brand-primary transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/registertion" 
                className="px-6 py-2.5 bg-brand-secondary text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-secondary/20 hover:scale-105 active:scale-95 transition-all"
              >
                Get Started
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-brand-primary"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <FaHome /> : <FaCaretDown />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-brand-primary/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-2xl p-6 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-display font-bold text-brand-primary">Menu</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50" onClick={() => setIsOpen(false)}>
              <FaCaretDown />
            </button>
          </div>
          <div className="space-y-4">
            <Link to="/" className="block p-4 rounded-2xl bg-slate-50 font-medium" onClick={handleMobileNavClick}>Home</Link>
            <Link to="/destination" className="block p-4 rounded-2xl hover:bg-slate-50 font-medium" onClick={handleMobileNavClick}>Destinations</Link>
            <Link to="/BuyRentCar" className="block p-4 rounded-2xl hover:bg-slate-50 font-medium" onClick={handleMobileNavClick}>Rentals</Link>
            <Link to="/contact" className="block p-4 rounded-2xl hover:bg-slate-50 font-medium" onClick={handleMobileNavClick}>Contact</Link>
          </div>
          {user ? (
            <button className="w-full mt-8 p-4 rounded-2xl bg-brand-accent/10 text-brand-accent font-bold" onClick={handleLogout}>Log Out</button>
          ) : (
            <div className="space-y-3 mt-8">
              <Link to="/login" className="block w-full p-4 rounded-2xl bg-slate-50 text-slate-700 font-bold text-center" onClick={handleMobileNavClick}>Sign In</Link>
              <Link to="/registertion" className="block w-full p-4 rounded-2xl bg-brand-primary text-white font-bold text-center" onClick={handleMobileNavClick}>Create Account</Link>
            </div>
          )}
        </div>
      </div>
    </header>

  );
};

export default Navbar;