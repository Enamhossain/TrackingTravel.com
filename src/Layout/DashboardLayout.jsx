// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaHome, FaCar, FaMoneyBillAlt, FaChartLine, FaCreditCard, FaUserCircle, FaUser, FaServicestack } from 'react-icons/fa';
import useAuth from '../Hook/useAuth';
import { useEffect, useState } from 'react';

const DashboardLayout = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (user?.email) {
        try {
          const response = await fetch(`https://trackingtrip-server.onrender.com/users/${user?.email}`, {
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${token}`,
            }
          });
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const data = await response.json();
          setUserInfo(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!userInfo || userInfo.role !== 'admin') {
    return <div className="flex items-center justify-center h-screen text-2xl font-bold text-red-600">Access Denied: Admins Only</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
        <Link to="/" className="text-2xl mt-2 font-bold mb-8 text-center"> <h1>TrackingTrip</h1> </Link>
        <ul className="space-y-6 mt-5">
          <li>
            <Link to="/dashboard" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaHome className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/Addservicecar" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaCar className="mr-3" />
              Add Service Car
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manageservicedata" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaMoneyBillAlt className="mr-3" />
              Manage Service
            </Link>
          </li>
          <li>
            <Link to="/revenue" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaChartLine className="mr-3" />
              Revenue
            </Link>
          </li>
          <li>
            <Link to="/dashboard/addservicecar" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaUserCircle className="mr-3" />
              Add Service Home
            </Link>
          </li>
          <li>
            <Link to="/payment" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
              <FaCreditCard className="mr-3" />
              Payment
            </Link>
          </li>
          <li>
            <Link to="/account" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
            <FaUser className="mr-3"/>
              Account
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center text-white hover:bg-blue-500 p-2 rounded-md transition">
                <FaServicestack className="mr-3"/>
              Settings
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
