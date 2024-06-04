/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {  CgArrowRight } from 'react-icons/cg';

// eslint-disable-next-line react/prop-types
const HomeRentCard = ({ image, category, title,price,RoomDetails,review  }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
    <img 
      src={image}
      alt="House"
      className="w-full object-cover"
    />

    <div className="p-4">
      <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs mb-2">{category}</button>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      
         <div className="space-y-2  mt-2 mb-5">
                            {RoomDetails.map((detail, index) => (
                                <span 
                                    key={index} 
                                    className="bg-gray-200 rounded px-2 py-1 ml-1 text-xs inline-block"
                                >
                                    {detail}
                                </span>
                            ))}
                        </div>

      <div className="flex items-end justify-between mb-2">
        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2 ">15% Off</span>
        <div className="flex items-end justify-between">
          <span className="text-yellow-400 mr-1">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
          </span>
          <span className="text-sm">{review} (142 Reviews)</span>
        </div>
      </div>

      <p className="text-2xl font-semibold text-blue-600">From  <span className='text-gray-900'> {price} </span></p>

      <span className='float-end w-5 h-14'> <CgArrowRight/></span>
    </div>
  </div>
  );
};

export default HomeRentCard;
