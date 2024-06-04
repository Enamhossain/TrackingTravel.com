// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-8 md:px-20 lg:px-40">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* GeoTrip Logo & Tagline */}
      <div className="col-span-1 md:col-span-2">
        <img src="https://i.ibb.co/JcGn8XL/Screenshot-12.png" alt="TrackTrip" className="h-8 mb-2" />
        <p className="text-sm">We make your dream more beautiful & enjoyable with lots of happiness.</p>
      </div>

      {/* The Navigation */}
      <div>
        <h4 className="text-lg font-semibold mb-2">The Navigation</h4>
        <ul className="space-y-1 text-sm">
          <li><a href="#talent-marketplace" className="hover:underline">Talent Marketplace</a></li>
          <li><a href="#payroll-services" className="hover:underline">Payroll Services</a></li>
          <li><a href="#direct-contracts" className="hover:underline">Direct Contracts</a></li>
          <li><a href="#hire-worldwide" className="hover:underline">Hire Worldwide</a></li>
          <li><a href="#hire-usa" className="hover:underline">Hire in the USA</a></li>
          <li><a href="#how-to-hire" className="hover:underline">How to Hire</a></li>
        </ul>
      </div>

      {/* Our Resources */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Our Resources</h4>
        <ul className="space-y-1 text-sm">
          <li><a href="#free-business-tools" className="hover:underline">Free Business Tools</a></li>
          <li><a href="#affiliate-program" className="hover:underline">Affiliate Program</a></li>
          <li><a href="#success-stories" className="hover:underline">Success Stories</a></li>
          <li><a href="#upwork-reviews" className="hover:underline">Upwork Reviews</a></li>
          <li><a href="#resources" className="hover:underline">Resources</a></li>
          <li><a href="#help-support" className="hover:underline">Help & Support</a></li>
        </ul>
      </div>

      {/* The Company & Payment Methods */}
      <div>
        <h4 className="text-lg font-semibold mb-2">The Company</h4>
        <ul className="space-y-1 text-sm mb-4">
          <li><a href="#about-us" className="hover:underline">About Us</a></li>
          <li><a href="#leadership" className="hover:underline">Leadership</a></li>
          <li><a href="#contact-us" className="hover:underline">Contact Us</a></li>
          <li><a href="#investor-relations" className="hover:underline">Investor Relations</a></li>
          <li><a href="#trust-safety" className="hover:underline">Trust, Safety & Security</a></li>
        </ul>

        <h4 className="text-lg font-semibold mb-2">Payment Methods</h4>
        {/* <div className="flex space-x-4">
          <img src="/path/to/payment-icon1.svg" alt="Payment Method 1" className="w-8 h-5" />
          <img src="/path/to/payment-icon2.svg" alt="Payment Method 2" className="w-8 h-5" />
          <img src="/path/to/payment-icon3.svg" alt="Payment Method 3" className="w-8 h-5" />
          <img src="/path/to/payment-icon4.svg" alt="Payment Method 4" className="w-8 h-5" />
        </div> */}
      </div>
    </div>

    {/* Our Partners & Bottom Bar */}
    <div className="container mx-auto mt-12 pt-8 border-t border-blue-800">
      {/* Add partners and bottom bar content as needed */}
    </div>
  </footer>
  
  )
}
