/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const VehicleCard = ({ vehicle }) => {
   
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={vehicle.image} alt={vehicle.title} className="w-full h-48 object-cover" />
      <div className="p-4">
      
        <div className="text-red-500 text-xs font-semibold">{vehicle.note}</div>
        <h3 className="text-xl font-bold text-gray-900 mt-2">{vehicle.title}</h3>
        <div className="text-gray-500">{vehicle.type} | {vehicle.features.join(' | ')}</div>
        <div className="text-green-600 text-sm mt-2">{vehicle.cancellation}</div>
        <div className="flex flex-wrap mt-2">
          {vehicle.tags.map((tag, index) => (
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
      </div>
    </div>
  );
};

export default VehicleCard;
