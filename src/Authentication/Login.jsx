// Login.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from 'react-icons/fa';




// eslint-disable-next-line react/prop-types
const Login = ({ handleCloseLoginModal }) => {
    
    const {  googleSignIn, singIn ,user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      
  
      await singIn(email, password);
    };
  
  
    
    const handleGoogleSignIn = () => {
      googleSignIn().then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: data?.user?.displayName,
          };
         
          fetch("https://trackingtrip-server.onrender.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
             console.log(data)
            });
        }
      });
    };

    useEffect(() => {
        if (user) {
          navigate(from, { replace: true });
        }
      }, [user, from, navigate]);
    

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900/80 via-blue-950/80 to-black/80 backdrop-blur-sm">
      <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md p-8 mx-2">
        <button onClick={handleCloseLoginModal} className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-2">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-6">Log in to your account</p>
        <div className="flex flex-col gap-3 mb-4">
          <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-3 w-full py-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 text-gray-700 font-semibold shadow-sm transition">
            <FaGoogle className="text-red-500" /> Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-2 rounded-lg border border-gray-200 bg-white hover:bg-blue-50 text-gray-700 font-semibold shadow-sm transition">
            <FaFacebookF className="text-blue-600" /> Sign in with Facebook
          </button>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-400">or</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="block w-full pl-10 pr-4 py-3 text-gray-700 placeholder-gray-400 bg-white/90 border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 transition"
              autoComplete="current-password"
            />
          </div>
          <button className="w-full py-3 mt-2 text-base font-semibold tracking-wide text-white capitalize transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
            Log in
          </button>
        </form>
        <div className="text-center mt-6 text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <a href="/registertion" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
