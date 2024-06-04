// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import HomeRentCard from '../../Component/HomeRentCard';

const rentalProperties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "House",
      title: "The latest news with Flowspark",
      RoomDetails:["2 Beds","2 baths","21sqft","1 Store"],
      price:"US$429",
      review:"4.6",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Apartment",
      title: "Stunning Apartment in Downtown",
      RoomDetails:["3 Beds","2 Baths","1800 sqft","2 Balcony"],
      price:"US$849",
      review:"4.9",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Villa",
      title: "Luxury Villa with Ocean View",
      RoomDetails:["4 Beds","4 Baths","4000 sqft","Swimming Pool"],
      price:"US$1999",
      review:"5.0",
    }
  ];

const Hotel = () => {
  const [rentalProperties, setrentalProperties] = useState([]);
   
    
  useEffect(() => {
    fetch('http://localhost:3000/RentalProperties')
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
