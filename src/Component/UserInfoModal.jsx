/* eslint-disable react/prop-types */
// userInfoInfoModal.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

import profile from "../assets/profile-pic (3).png"

const userInfoModal = ({ isOpen, onClose, userInfo }) => {
  if (!isOpen) return null;

  const fullName = userInfo?.firstName && userInfo?.lastName && userInfo?.displayName
    ? `${userInfo.firstName} ${userInfo.lastName}` 
    : "userInfo Name";
   console.log(userInfo)
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 relative">
        <button className="absolute top-0 right-0 m-4 text-gray-600" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">userInfo Information</h2>
        <div className="mb-4">
          <img src={userInfo?.photoURL || profile} alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-2">{fullName || "userinfo name" }</h3>
        </div>
        <div className="mb-2">
          <strong>Email:</strong> {userInfo?.email || "userInfo@example.com"}
        </div>
        <div className="mb-2">
          <strong>Role:</strong> {userInfo?.role || "user"}
        </div>
        <div className="mb-2">
          <strong>PhoneNumber:</strong> {userInfo?.phoneNumber || "null"}
        </div>
         <Link to={`/dashboard/profile/edit/${userInfo?._id}`} className="text-center bg-blue-500 p-3 text-white font-bold">Edit Profile</Link>
      </div>
    </div>
  );
};

export default userInfoModal;
