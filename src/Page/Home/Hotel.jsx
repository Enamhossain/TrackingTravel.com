// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import HomeRentCard from '../../Component/HomeRentCard';



const Hotel = () => {
  const [rentalProperties, setrentalProperties] = useState([]);
   
    
  useEffect(() => {
    fetch('https://tracking-trip-server.vercel.app/RentalProperties')
      .then(response => response.json())
      .then(data =>setrentalProperties(data))
      
  }, [])
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <h2 className="max-w-3xl text-center  md:text-5xl text-3xl font-bold text-blue-900">
            Explore Hot Rental Properties
          </h2>
          <p className="mb-12 mt-4 text-[#636262]">
            Discover the best rental deals available right now
          </p>
          <div className="mb-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {rentalProperties.map((property) => (
              <HomeRentCard
                key={property.id}
                image={property.image}
                category={property.category}
                title={property.title}
                RoomDetails={property.RoomDetails}
                price={property.price}
                review={property.review}
              />
            ))}
          </div>
          <a
            href="#"
            className="flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
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
      </div>
    </section>
  );
};

export default Hotel;
