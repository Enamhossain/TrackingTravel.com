// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const RentCar = () => {

  const [carRentDetails, setcarRentDetails] = useState([]);
   
    
    useEffect(() => {
      fetch('https://trackingtrip-server.onrender.com/RentCar')
        .then(response => response.json())
        .then(data =>setcarRentDetails(data))
        
    }, [])

  return (
    <div className="bg-blue-500 min-h-screen">
      
      
      <div className="max-w-7xl mx-auto p-4 ">
        <div className="bg-white p-6 rounded shadow-md mt-32">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Select Pickup Location"
              className="p-3 w-full border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Check-In & Check-Out"
              className="p-3 w-full border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Select Drop Location"
              className="p-3 w-full border border-gray-300 rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-3 rounded">Search</button>
          </div>
        </div>

        <div className="flex mt-6">
          <aside className="w-1/4 bg-white p-4 rounded shadow-md">
            <h3 className="font-bold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Supplier</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-gray-200 p-2 rounded">Easirent</button>
                  <button className="bg-gray-200 p-2 rounded">Hertz</button>
                  <button className="bg-gray-200 p-2 rounded">National</button>
                  <button className="bg-gray-200 p-2 rounded">Green Motion</button>
                  <button className="bg-gray-200 p-2 rounded">SIXT</button>
                  <button className="bg-gray-200 p-2 rounded">ALAMO</button>
                  <button className="bg-gray-200 p-2 rounded">Avis</button>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Seats</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-gray-200 p-2 rounded">4-5 Seats</button>
                  <button className="bg-gray-200 p-2 rounded">5-7 Seats</button>
                  <button className="bg-gray-200 p-2 rounded">Others</button>
                </div>
              </div>
            </div>
          </aside>

          <main className="w-3/4 ml-6">
  <div className="bg-white p-4 rounded shadow-md mb-4">
    {carRentDetails.map((item) => {
      return (
        <div key={item.id} className="flex mb-4">
          <img
            src={item.image}
            alt="Car"
            className="w-32 h-32 object-cover rounded"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-500">SUV . AC . 5 Seats</p>
            <p className="mt-2">Manual . 1 Large Bag . 1 Small Bag . Diesel</p>
            <p className="mt-2">600Kms included. After that $15/Kms</p>
            <p className="mt-2 text-green-500">Free Cancellation, till 1 hour of Pick up</p>
            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">See Availability</button>
          </div>
        </div>
      );
    })}
  </div>
</main>

        </div>
      </div>
    </div>
  );
}

export default RentCar;
