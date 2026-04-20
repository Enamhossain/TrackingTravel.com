import React from 'react';
import HomeRentCard from '../../Component/HomeRentCard';
import { useOptimizedFetch } from '../../Hook/useOptimizedFetch';
import { CardSkeleton, ErrorState } from '../../Shared/FeedbackStates';

const Hotel = () => {
  const { data: rentalProperties, loading, error, refetch } = useOptimizedFetch('https://trackingtrip-server.onrender.com/RentalProperties');

  return (
    <section className="bg-brand-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Curated Stays</h2>
        <h3 className="text-4xl md:text-5xl font-display font-black text-brand-primary mb-6">
          Explore Hot Rental Properties
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-16">
          Discover hand-picked accommodations that offer the perfect blend of comfort and luxury.
        </p>

        {error && <ErrorState message={error} onRetry={refetch} />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            [...Array(3)].map((_, i) => <CardSkeleton key={i} />)
          ) : (
            rentalProperties?.map((property) => (
              <HomeRentCard
                key={property.id}
                image={property.image}
                category={property.category}
                title={property.title}
                RoomDetails={property.RoomDetails}
                price={property.price}
                review={property.review}
              />
            ))
          )}
        </div>

        {!loading && !error && (
          <button className="px-10 py-4 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-2xl hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200">
            View All Properties
          </button>
        )}
      </div>
    </section>
  );
};

export default Hotel;
