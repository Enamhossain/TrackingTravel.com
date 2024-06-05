// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import VehicleCard from '../../Component/VehicleCard';

const Car = () => {
  const [vehicles, setVehicle] = useState([]);
   
    
    useEffect(() => {
      fetch('https://tracking-trip-server.vercel.app/RentCar')
        .then(response => response.json())
        .then(data =>setVehicle(data))
        
    }, [])

  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900">Our Awesome Vehicles</h2>
        <p className="text-gray-600">Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
        {vehicles?.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
  
      </div>
        
      <a
            href="#"
            className="flex text-center justify-center  container mx-auto items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p className="mr-6 font-bold">View More</p>
            <svg
              fill="currentColor"
              className="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
            </svg>
          </a>
    

    </div>

  </section>
  )
}

export default Car