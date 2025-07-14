import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MapComponent from '../../Component/MapComponent';
import placesData from '../../places.json';
const Destination = () => {
    const [touristPlaces, setTouristPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
      setTimeout(() => {
        try {
          setTouristPlaces(placesData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        }
      }, 1000); // Simulating 1 second delay
    }, []);

  if (loading) {
    return <div className="w-full bg-blue-600 text-white p-10">Loading...</div>;
  }

  if (error) {
    return <div className="w-full bg-blue-600 text-white p-10">Error: {error.message}</div>;
  }

  return (
    <div className="w-full bg-blue-600 text-white p-10">
      <header className="p-10 flex justify-center items-center">
        <h1 className="text-2xl font-bold">Tourist Destinations</h1>
      </header>
      <div className="w-full mt-4 bg-blue-500">
        <MapComponent />
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {touristPlaces.map((place, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-4 rounded-lg shadow-md m-2 w-full sm:w-1/2 lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={place.image} alt={place.name} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

