// eslint-disable-next-line no-unused-vars
import React from "react";

const promotions = [
    {
      id: 1,
      logo: 'https://i.ibb.co/0V8djwT/Biman-Bangladesh-Airlines.png',
      background: 'bg-green-100',
      discount: '$899 off',
      flightType: 'On Domestic Flights',
      code: 'LOG125F',
      codeStyle: 'border-dotted border-green-500',
      arrowColor: 'text-green-500',
    },
    {
      id: 2,
      logo: 'https://i.ibb.co/0V8djwT/Biman-Bangladesh-Airlines.png',
      background: 'bg-blue-100',
      discount: '$899 off',
      flightType: 'On Domestic Flights',
      code: 'INT285',
      codeStyle: 'border-dotted border-blue-500',
      arrowColor: 'text-blue-500',
    },
    {
      id: 3,
      logo: 'https://i.ibb.co/0V8djwT/Biman-Bangladesh-Airlines.png',
      background: 'bg-red-100',
      discount: '$899 off',
      flightType: 'On Domestic Flights',
      code: 'LOG125F',
      codeStyle: 'border-dotted border-red-500',
      arrowColor: 'text-red-500',
    },
    {
      id: 4,
      logo: 'https://i.ibb.co/0V8djwT/Biman-Bangladesh-Airlines.png',
      background: 'bg-yellow-100',
      discount: '$899 off',
      flightType: 'On Domestic Flights',
      code: 'LOG125F',
      codeStyle: 'border-dotted border-yellow-500',
      arrowColor: 'text-yellow-500',
    },
  ];
  

const HomeSection = () => {
  return (
    <section className="py-12 bg-gray-50">
<div className="container mx-auto px-4 md:px-12 lg:px-24">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-blue-900">Our Awesome Promotions</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {promotions.map((promo) => (
        <div  key={promo.id} className={`p-6 rounded-lg shadow-md ${promo.background}`}>
        <img src={promo.logo} alt="Promotion Logo" className="h-10 mb-4" />
        <div className="text-sm">Flat</div>
        <div className="text-2xl font-bold text-green-700">{promo.discount}</div>
        <div className="text-sm mb-4">{promo.flightType}</div>
        <div className={`text-lg font-bold border p-2 ${promo.codeStyle}`}>{promo.code}</div>
        <div className={`mt-4 ${promo.arrowColor}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      ))}
    </div>
    
</div>
</section>
  );
};

export default HomeSection;



