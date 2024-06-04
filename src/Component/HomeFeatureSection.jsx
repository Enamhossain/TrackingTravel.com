// eslint-disable-next-line no-unused-vars
import React from 'react'

const HomeFeatureSection = () => {
    const features = [
        {
          id: 1,
          title: 'Get The Superb Discount',
          description: 'Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets.',
          color: 'bg-green-500',
        },
        {
          id: 2,
          title: '100% Price Transparency',
          description: 'Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets.',
          color: 'bg-yellow-500',
        },
        {
          id: 3,
          title: 'Top Class Destination',
          description: 'Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets.',
          color: 'bg-purple-500',
        },
      ];
    
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Why Move To TrackingTrip.com</h2>
          <p className="text-gray-600">Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
        </div>
        <div className="md:flex items-center">
          {/* Images Section */}
          <div className="flex justify-center md:w-1/2">
            <div className="relative  bottom-8">
              <img src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Couple 1" className=" rounded-full w-60 h-60 object-cover mb-4 md:mb-0" />
              <img src="https://images.pexels.com/photos/977460/pexels-photo-977460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Couple 2" className="rounded-full w-60 h-60 object-cover absolute top-24 left-24" />
            </div>
          </div>
          {/* Features Section */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start mb-8">
                <div className={`w-10 h-10 flex items-center justify-center text-white rounded-full ${feature.color}`}>
                  {String(feature.id).padStart(2, '0')}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-blue-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFeatureSection


