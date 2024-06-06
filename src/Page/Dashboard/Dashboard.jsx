
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import useAuth from '../../Hook/useAuth';
import UserInfoModal from '../../Component/UserInfoModal';
import profile from '../../assets/profile-pic (3).png'
import DashboardGrap from '../../Component/DashboardGrap';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 4567, amt: 1398 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 9800 },
  
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      if (user?.email) {
        try {
          const response = await fetch(`http://localhost:3000/users/${user?.email}`, {
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
          console.error("Error fetching user info:", error.message);
          setError(error.message);
          setLoading(false);
        }
      }
    };
    fetchUserInfo();
  }, [user]);

  console.log(userInfo);


  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10 p-8">
   
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 border rounded-lg"
          />
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Eng (US)</option>
              <option>Esp (ES)</option>
              <option>Fra (FR)</option>
            </select>
          </div>
          <img
            src={user?.photoURL || profile}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl">$100k</p>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl">300</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">New Customers</h3>
          <p className="text-2xl">8</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow-md mb-5">
        <h3 className="text-lg font-semibold mb-4">Visitor Insights</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-white p-4  mb-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Ratings Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
        <DashboardGrap/> 
      {/* User Info Modal */}
      <UserInfoModal isOpen={isModalOpen} onClose={handleCloseModal} userInfo={userInfo} />
    </div>
  );
}

export default Dashboard;
