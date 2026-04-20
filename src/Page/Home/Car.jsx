import React from 'react';
import VehicleCard from '../../Component/VehicleCard';
import { useOptimizedFetch } from '../../Hook/useOptimizedFetch';
import { CardSkeleton, ErrorState } from '../../Shared/FeedbackStates';

const Car = () => {
  const { data: vehicles, loading, error, refetch } = useOptimizedFetch('https://trackingtrip-server.onrender.com/RentCar');

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Our Fleet</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-brand-primary">Our Awesome Vehicles</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto italic">
            Discover the perfect ride for your next trip, from luxury sedans to rugged off-roaders.
          </p>
        </div>

        {error && <ErrorState message={error} onRetry={refetch} />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
             [...Array(3)].map((_, i) => <CardSkeleton key={i} />)
          ) : (
            vehicles?.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
          )}
        </div>

        {!loading && !error && (
          <div className="flex justify-center">
            <button className="px-10 py-4 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-secondary transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-primary/20">
              Explore Entire Fleet
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Car;