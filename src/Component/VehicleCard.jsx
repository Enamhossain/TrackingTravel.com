/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const VehicleCard = ({ vehicle }) => {
   console.log(vehicle._id)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={vehicle.image} alt={vehicle.title} className="w-full h-48 object-cover" />
      <div className="p-4">
      
        <div className="text-red-500 text-xs font-semibold">{vehicle.note}</div>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{vehicle.title}</h3>
        <div className="text-gray-500">{vehicle.type} | {vehicle.features.join(' | ')}</div>
        <div className="text-green-600 text-sm mt-2">{vehicle.cancellation}</div>
        <div className="flex flex-wrap mt-2">
          {vehicle?.tags?.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-red-500 text-sm">{vehicle.discount}</div>
          <div className="text-xl font-bold text-gray-900">{vehicle.price} <span className="text-gray-500 line-through">{vehicle.oldPrice}</span></div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-500 text-sm">{vehicle.reviews}</div>
          <div className="text-red-500 text-sm font-semibold">{vehicle.rating}</div>
        </div>
        <Link
            to={`/rentCar/${vehicle._id}`}
            className="flex text-center justify-center  container mx-auto items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p className="mr-6 font-bold">Rent Car</p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </Link>
      </div>
    </div>
  );
};

export default VehicleCard;
