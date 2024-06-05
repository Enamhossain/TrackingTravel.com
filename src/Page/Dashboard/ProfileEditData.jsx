// eslint-disable-next-line no-unused-vars
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProfileEditData = () => {
  const data = useLoaderData();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const userData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      number: form.number.value,
      city: form.city.value,
      state: form.state.value,
      zipCode: form.zipCode.value,
      country: form.country.value,
    };

    fetch(`https://tracking-trip-server.vercel.app/users/${data?.email}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        toast.success("successfully update data",updatedData)
        navigate('/');
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img
              src={data?.profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-500 rounded-full p-2 cursor-pointer">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536M9 11l3 3-6 6H3v-3l6-6zm5-4.5a2.121 2.121 0 113 3L8 17H5v-3l9-9z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Frist Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            defaultValue={data?.firstName || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="LastName"
            name="lastName"
            defaultValue={data?.lastName || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={data?.email || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            defaultValue={data?.number || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={data?.city || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              id="state"
              name="state"
              defaultValue={data?.state || ''}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              defaultValue={data?.zipCode || ''}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            defaultValue={data?.country || ''}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button type="button" onClick={() => navigate('/')} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
            Back To Home
          </button>
          <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditData;
