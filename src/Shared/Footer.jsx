// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white pt-12 pb-4 px-4 sm:px-8 md:px-20 lg:px-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div className="col-span-1 flex flex-col gap-3">
          <img src="https://i.ibb.co/JcGn8XL/Screenshot-12.png" alt="TrackTrip" className="h-10 mb-2 rounded shadow-lg bg-white/10 p-1 w-fit" />
          <p className="text-sm text-gray-300">We make your dream more beautiful & enjoyable with lots of happiness.</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition"><FaTwitter /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition"><FaInstagram /></a>
            <a href="#" className="p-2 bg-blue-800 rounded-full hover:bg-blue-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Rent Car</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Hotels</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Destinations</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Help & Support</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Reviews</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Resources</a></li>
          </ul>
        </div>
        {/* Company & Payment Methods */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300">Company</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Leadership</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Investor Relations</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Trust & Safety</a></li>
          </ul>
          <h4 className="text-lg font-semibold mb-2 text-blue-300">Payment Methods</h4>
          <div className="flex gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="w-8 h-5 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="w-8 h-5 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/PayPal.svg" alt="PayPal" className="w-8 h-5 bg-white rounded p-1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Stripe_Logo%2C_revised_2016.png" alt="Stripe" className="w-8 h-5 bg-white rounded p-1" />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="container mx-auto mt-10 pt-6 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition">Sitemap</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} TrackingTrip. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
