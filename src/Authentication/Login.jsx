// Login.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";




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
         
          fetch("https://tracking-trip-server.vercel.app/users", {
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
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
    
      <div className="bg-white p-6 w-auto rounded-lg shadow-lg">
      <div onClick={handleCloseLoginModal} className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
          Log in to your account
        </h1>
        <div>
          <a onClick={handleGoogleSignIn }
            href="#"
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Facebook
            </span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button className="flex items-center justify-between w-full px-6 py-3 mt-6 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Log in</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
