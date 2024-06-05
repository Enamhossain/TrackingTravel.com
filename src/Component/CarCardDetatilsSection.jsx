// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarCardDetailsSection = () => {
    const vehicle = useLoaderData();
   
    return (
        <section className="bg-blue-800 text-gray-800 ">
            <div className="hero flex-1 bg-cover bg-center py-16 px-4 md:py-32 md:px-10 lg:px-32 xl:max-w-5xl" style={{ backgroundImage: `url(${vehicle.heroImageUrl})` }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-lg flex justify-between gap-4">
                <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} className="rounded-lg shadow-lg w-full h-[50%] object-cover" />
                <div className=" container mx-auto mt-12 text-white  items-center justify-center">
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold">Specifications</h2>
                    <ul className="mt-4 space-y-2 text-left">
                        <li><strong>Car:</strong> {vehicle.title}</li>
                        <li><strong>Discount:</strong> {vehicle.discount}</li>
                        <li><strong>Mileage:</strong> {vehicle.mileage} miles</li>
                        <li><strong>Price:</strong> ${vehicle.price}</li>
                        <li><strong>Features:</strong> {vehicle.features}</li>
                        <li><strong>Rating:</strong> {vehicle.rating}</li>
                    </ul>
                </div>
                <div className="flex flex-col mt-5 items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button className="px-3 py-3 text-lg font-semibold rounded bg-blue-600 text-white">Buy Now</button>
                        <button className="px-3 py-3 text-lg font-semibold rounded bg-gray-300 text-gray-800">Learn More</button>
                    </div>
            </div>
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl text-white">{vehicle.make} {vehicle.model}</h1>
                    <p className="px-8 mt-8 mb-12 text-lg text-gray-300">{vehicle.description}</p>
                </div>
                 
            </div>
            
        </section>
    );
};

export default CarCardDetailsSection;
