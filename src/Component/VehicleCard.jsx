/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <motion.img 
          src={vehicle.image} 
          alt={vehicle.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-brand-primary uppercase tracking-tighter shadow-sm">
            {vehicle.type}
          </span>
        </div>
        {vehicle.discount > 0 && (
          <div className="absolute top-4 right-4 animate-bounce">
            <span className="px-3 py-1 bg-brand-accent text-white rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-brand-accent/20">
              Save {vehicle.discount}%
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-xl text-brand-primary line-clamp-1">{vehicle.title}</h3>
          <div className="flex items-center gap-1">
             <span className="text-yellow-400">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
              </span>
              <span className="text-xs font-bold text-brand-primary">{vehicle.rating}</span>
          </div>
        </div>
        
        <p className="text-sm font-medium text-slate-500 mb-4">{vehicle.features.join(' • ')}</p>

        <div className="flex items-center gap-2 mb-6">
          {vehicle?.tags?.slice(0, 2).map((tag, index) => (
            <span key={index} className="text-[10px] font-bold text-brand-secondary bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-tight">
              {tag}
            </span>
          ))}
          {vehicle.cancellation && (
             <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg uppercase tracking-tight">
              Free Cancellation
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-sans">Price from</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-brand-primary">${vehicle.price}</span>
              {vehicle.oldPrice && (
                <span className="text-sm font-medium text-slate-400 line-through">${vehicle.oldPrice}</span>
              )}
            </div>
          </div>
          
          <Link
            to={`/rentCar/${vehicle._id}`}
            className="px-6 py-3 bg-brand-primary text-white rounded-2xl font-bold text-sm hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
