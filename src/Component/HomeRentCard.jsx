/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { CgArrowRight } from "react-icons/cg";
import {motion} from "framer-motion"
// eslint-disable-next-line react/prop-types
const HomeRentCard = ({
  image,
  category,
  title,
  price,
  RoomDetails,
  review,
}) => {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img 
          src={image} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-brand-primary uppercase tracking-tighter shadow-sm">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-brand-accent text-white rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-brand-accent/20">
            -15%
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-brand-primary mb-3 group-hover:text-brand-secondary transition-colors line-clamp-1">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {RoomDetails.map((detail, index) => (
            <span key={index} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg uppercase tracking-tight">
              {detail}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting from</p>
            <p className="text-2xl font-black text-brand-primary">
              {price}<span className="text-sm font-medium text-slate-400 font-sans ml-1 text-[12px] lowercase tracking-normal">/night</span>
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
              </span>
              <span className="text-sm font-bold text-brand-primary">{review}</span>
            </div>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">142 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRentCard;
