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
    <div className="w-full bg-brand-bg min-h-screen pt-24 pb-20">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Explore the World</h1>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-primary">Tourist Destinations</h2>
          <p className="mt-4 text-slate-500 max-w-2xl">
            Discover breathtaking locations and hidden gems carefully curated for your next adventure.
          </p>
        </div>
      </header>

      {/* Map Section with Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-[3/1]">
           <MapComponent />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristPlaces.map((place, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
                  {place.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {place.description}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <button className="text-xs font-bold text-brand-secondary uppercase tracking-widest hover:text-brand-primary transition-colors flex items-center gap-2">
                    Explore More
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Destination;

