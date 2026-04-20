import React from 'react';
import { useOptimizedFetch } from '../../Hook/useOptimizedFetch';
import { CardSkeleton, ErrorState } from '../../Shared/FeedbackStates';
import { FaCarSide, FaCogs, FaUsers, FaGasPump, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RentCar = () => {
  const { data: cars, loading, error, refetch } = useOptimizedFetch('https://trackingtrip-server.onrender.com/RentCar');

  const suppliers = ['Easirent', 'Hertz', 'National', 'Green Motion', 'SIXT', 'ALAMO', 'Avis'];
  const seatFilters = ['4-5 Seats', '5-7 Seats', 'Others'];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Search Dashboard */}
        <div className="bg-white rounded-[2rem] p-6 shadow-2xl shadow-slate-200 border border-slate-50 mb-12 transform -translate-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1 p-3 rounded-2xl bg-slate-50 border border-transparent focus-within:border-brand-secondary transition-all">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pickup Location</label>
              <input type="text" placeholder="Select Location" className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-bold placeholder:text-slate-300" />
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-2xl bg-slate-50 border border-transparent focus-within:border-brand-secondary transition-all">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Dates</label>
              <input type="text" placeholder="Check-In & Out" className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-bold placeholder:text-slate-300" />
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-2xl bg-slate-50 border border-transparent focus-within:border-brand-secondary transition-all">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Drop Location</label>
              <input type="text" placeholder="Select Location" className="bg-transparent border-none p-0 focus:ring-0 text-brand-primary font-bold placeholder:text-slate-300" />
            </div>
            <button className="bg-brand-secondary text-white font-black rounded-2xl hover:bg-brand-primary transition-all shadow-lg shadow-brand-secondary/30 uppercase tracking-widest text-sm">
              Search Cars
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="text-lg font-display font-black text-brand-primary mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-brand-secondary rounded-full" />
                  Filter Results
                </h3>
                
                <div className="space-y-8">
                  <section>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Supplier</h4>
                    <div className="flex flex-wrap gap-2">
                      {suppliers.map(s => (
                        <button key={s} className="px-4 py-2 bg-slate-50 hover:bg-brand-secondary hover:text-white rounded-xl text-xs font-bold text-slate-600 transition-all border border-slate-100 uppercase tracking-tight">
                          {s}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Seating Capacity</h4>
                    <div className="flex flex-wrap gap-2">
                      {seatFilters.map(s => (
                        <button key={s} className="px-4 py-2 bg-slate-50 hover:bg-brand-secondary hover:text-white rounded-xl text-xs font-bold text-slate-600 transition-all border border-slate-100 uppercase tracking-tight">
                          {s}
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </aside>

          {/* Car Listings */}
          <main className="lg:w-3/4">
            {error && <ErrorState message={error} onRetry={refetch} />}
            
            <div className="space-y-6">
              {loading ? (
                [...Array(4)].map((_, i) => <CardSkeleton key={i} />)
              ) : (
                cars?.map((car) => (
                  <div key={car.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-6 flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-all duration-500">
                    {/* Car Image container */}
                    <div className="md:w-1/3 aspect-video md:aspect-square rounded-[2rem] overflow-hidden bg-slate-50">
                      <img src={car.image} alt={car.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-display font-black text-brand-primary">{car.title}</h3>
                          <div className="flex items-center gap-1">
                             <span className="text-yellow-400 text-sm">★</span>
                             <span className="text-sm font-bold text-brand-primary">{car.rating || '4.8'}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-4 mb-6">
                           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tight">
                             <FaCarSide className="text-brand-secondary" /> SUV
                           </div>
                           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tight">
                             <FaUsers className="text-brand-secondary" /> 5 Seats
                           </div>
                           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tight">
                             <FaCogs className="text-brand-secondary" /> Auto
                           </div>
                           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tight">
                             <FaGasPump className="text-brand-secondary" /> Diesel
                           </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-green-50 border border-green-100 flex items-center gap-3">
                           <FaCalendarCheck className="text-green-600" />
                           <p className="text-xs font-bold text-green-700 uppercase tracking-tight">Free Cancellation up to 1 hour before pickup</p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                          <p className="text-3xl font-black text-brand-primary">${car.price}</p>
                        </div>
                        <Link 
                          to={`/rentCar/${car._id}`}
                          className="px-10 py-4 bg-brand-primary text-white rounded-2xl font-black hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 uppercase tracking-widest text-xs"
                        >
                          Reserve Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RentCar;
