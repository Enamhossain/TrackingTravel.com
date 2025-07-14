// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Login from "./Login";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaGoogle, FaInstagram } from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
const Registertion = ({ handleCloseEditModal }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const from = location?.state?.from?.pathname || "/";
  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };


  const [passMatch, setPassMatch] = useState(true);
  const [error, setError] = useState('');
  const { createUser,googleSignIn } = useAuth(); // Ensure correct import and function name
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
   
    if (password !== confirmPassword) {
      setPassMatch(false);
      return;
    }

    setPassMatch(true);
    setError('');

    try {
      await createUser(email, password)
      const SaveUserInfo ={
        email:email,
        firstName:firstName,
        lastName:lastName,
        phoneNumber:phoneNumber,
        password:password
      }
      fetch("https://trackingtrip-server.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SaveUserInfo),
        
      })
      console.log('User created successfully');
      toast.success('Successfully created!');
      window.location.reload();
    } catch (error) {
      console.error('Error creating user:', error);
      setError(error.message);
    }
  };

    
  const handleGoogleSingIn = () => {
    googleSignIn().then((result) => {
     
      const users = result?.user;
      
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      fetch("https://trackingtrip-server.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
        
      })
        .then((res) => res.json())
        .then((data) => {
         localStorage.setItem('token',data?.token)
         window.location.reload();
         toast.success('Successfully created!');
        });
       
     
    })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }

  return (
    <>
      {showLoginModal ? (
        <Login handleCloseLoginModal={handleCloseLoginModal} />
      ) : (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900/80 via-blue-950/80 to-black/80 backdrop-blur-sm">
          <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-3xl p-0 md:p-8 mx-2 flex flex-col md:flex-row overflow-hidden">
            {/* Left side: illustration or benefits */}
            <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-700 to-blue-900 text-white w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Join TrackingTrip</h2>
              <p className="text-lg mb-6 text-blue-100">Create your free account and start your next adventure!</p>
              <img src="https://i.ibb.co/JcGn8XL/Screenshot-12.png" alt="Logo" className="w-24 h-24 rounded-full bg-white/20 shadow-lg" />
            </div>
            {/* Right side: form */}
            <div className="w-full md:w-1/2 p-8 relative">
              <button onClick={handleCloseEditModal} className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition md:top-4 md:right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-blue-900 mb-2">Create Account</h1>
              <p className="text-gray-500 mb-6">Let’s get you all set up so you can verify your personal account and begin your journey.</p>
              <div className="flex flex-col gap-3 mb-4">
                <button onClick={handleGoogleSingIn} className="flex items-center justify-center gap-3 w-full py-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 text-gray-700 font-semibold shadow-sm transition">
                  <FaGoogle className="text-red-500" /> Sign up with Google
                </button>
                <button className="flex items-center justify-center gap-3 w-full py-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 text-gray-700 font-semibold shadow-sm transition">
                  <FaInstagram className="text-pink-500" /> Sign up with Instagram
                </button>
              </div>
              <div className="flex items-center gap-2 my-4">
                <span className="flex-1 h-px bg-gray-300" />
                <span className="text-xs text-gray-400">or</span>
                <span className="flex-1 h-px bg-gray-300" />
              </div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaUser /></span>
                  <input type="text" placeholder="First Name" name="firstName" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaUser /></span>
                  <input type="text" placeholder="Last Name" name="lastName" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaPhone /></span>
                  <input type="text" placeholder="Phone Number" name="phoneNumber" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaEnvelope /></span>
                  <input type="email" placeholder="Email Address" name="email" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaLock /></span>
                  <input type="password" placeholder="Password" name="password" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaLock /></span>
                  <input type="password" placeholder="Confirm Password" name="confirmPassword" className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition" />
                </div>
                {!passMatch && (
                  <p className="text-red-600 text-sm">Passwords do not match</p>
                )}
                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}
                <button className="w-full py-3 mt-2 text-base font-semibold tracking-wide text-white capitalize transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                  Create Account
                </button>
              </form>
              <div className="text-center mt-6 text-sm text-gray-500">
                Already have an account?{' '}
                <button onClick={handleOpenLoginModal} className="text-blue-600 hover:underline">Log in</button>
              </div>
            </div>
          </div>
        </section>
      )}
      </>
    );
 
};

export default Registertion;
