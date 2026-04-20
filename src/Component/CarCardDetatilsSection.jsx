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
        <section className="bg-brand-bg min-h-screen pt-32 pb-20 px-4">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                {/* Car Image Container */}
                <div className="lg:w-3/5 relative">
                    <motion.div 
                        className="h-full min-h-[400px]"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={vehicle.image}
                            alt={`${vehicle.make} ${vehicle.model}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </motion.div>
                </div>

                {/* Details Side */}
                <div className="lg:w-2/5 p-8 md:p-12 flex flex-col">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-[10px] font-black uppercase tracking-widest">
                                {vehicle.type || 'Premium'}
                            </span>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                                </span>
                                <span className="text-sm font-bold text-brand-primary">{vehicle.rating}</span>
                            </div>
                        </div>

                        <motion.h1
                            className="text-4xl md:text-5xl font-display font-black text-brand-primary mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {vehicle.title}
                        </motion.h1>
                        
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            Experience the ultimate comfort and performance with our {vehicle.title}. Perfect for both city drives and long-distance adventures.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mileage</p>
                                <p className="text-lg font-black text-brand-primary">{vehicle.mileage || 'Unlimited'}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Price</p>
                                <p className="text-lg font-black text-brand-primary">${vehicle.price}<span className="text-xs font-medium text-slate-400">/day</span></p>
                            </div>
                        </div>

                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Top Features</h4>
                        <div className="flex flex-wrap gap-2 mb-10">
                            {features.map((feature, idx) => (
                                <span key={idx} className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-4 py-2 rounded-xl uppercase tracking-tight shadow-sm hover:border-brand-secondary transition-colors">
                                    {feature.trim()}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex gap-4">
                        <button className="flex-1 px-8 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2">
                            Rent Now
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CarCardDetailsSection;
