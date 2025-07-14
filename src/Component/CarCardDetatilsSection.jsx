// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const CarCardDetailsSection = () => {
    const vehicle = useLoaderData();
    let features = [];
    if (Array.isArray(vehicle.features)) {
        features = vehicle.features;
    } else if (typeof vehicle.features === 'string') {
        features = vehicle.features.split(',');
    }

    return (
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center justify-center py-10 px-2">
            <div className="w-full max-w-5xl bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Car Image */}
                <div className="md:w-1/2 w-full relative flex items-center justify-center bg-gradient-to-tr from-blue-700 to-blue-500">
                    <motion.img
                        src={vehicle.image}
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="object-cover w-full h-80 md:h-full md:rounded-l-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    />
                    {/* Gradient overlay for hero image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-t-2xl md:rounded-l-2xl" />
                </div>
                {/* Details Section */}
                <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                    <div>
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {vehicle.make} {vehicle.model}
                        </motion.h1>
                        <p className="text-gray-600 text-lg mb-4">{vehicle.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Car</span>
                                <span className="font-semibold text-gray-800">{vehicle.title}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Discount</span>
                                <span className="font-semibold text-green-600">{vehicle.discount}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Mileage</span>
                                <span className="font-semibold text-gray-800">{vehicle.mileage} miles</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Price</span>
                                <span className="font-semibold text-blue-700 text-lg">${vehicle.price}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Rating</span>
                                <span className="font-semibold text-yellow-500">{vehicle.rating} ★</span>
                            </div>
                        </div>
                        {/* Features as badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {features.map((feature, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                    {feature.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <motion.button
                            className="px-6 py-3 text-lg font-semibold rounded-lg bg-blue-700 text-white shadow-md hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            Buy Now
                        </motion.button>
                        <motion.button
                            className="px-6 py-3 text-lg font-semibold rounded-lg bg-white border border-blue-700 text-blue-700 shadow-md hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarCardDetailsSection;
