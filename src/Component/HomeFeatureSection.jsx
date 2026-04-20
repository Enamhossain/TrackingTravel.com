// eslint-disable-next-line no-unused-vars
import React from 'react'

const HomeFeatureSection = () => {
  const features = [
    {
      id: 1,
      title: 'Exclusive Discounts',
      description: 'Unlock special rates that you won\'t find anywhere else. We negotiate directly with partners.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      id: 2,
      title: 'Full Price Transparency',
      description: 'What you see is what you pay. No hidden fees or surprise taxes at checkout.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      color: 'bg-green-50 text-green-600',
    },
    {
      id: 3,
      title: 'Curated Destinations',
      description: 'Only the best resorts and experiences make it to our platform. Quality guaranteed.',
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop" 
                  alt="Feature 1" 
                  className="rounded-3xl w-full h-64 object-cover shadow-2xl" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop" 
                  alt="Feature 2" 
                  className="rounded-3xl w-full h-48 object-cover shadow-xl" 
                />
              </div>
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop" 
                  alt="Feature 3" 
                  className="rounded-3xl w-full h-48 object-cover shadow-xl" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800&auto=format&fit=crop" 
                  alt="Feature 4" 
                  className="rounded-3xl w-full h-64 object-cover shadow-2xl" 
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-secondary rounded-full mix-blend-multiply opacity-20 animate-pulse" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent rounded-full mix-blend-multiply opacity-10 animate-pulse delay-700" />
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-brand-primary leading-tight">
                Crafting Unforgettable <br />
                <span className="text-brand-secondary">Journeys Since 2024</span>
              </h3>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                At TrackingTravel, we believe that the best stories are found between the pages of a passport. We've simplified the complex world of travel so you can focus on the experience.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl ${feature.color} shadow-sm group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-primary mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeFeatureSection


