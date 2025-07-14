// eslint-disable-next-line no-unused-vars
import React from 'react';

const contacts = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901' },
  { name: 'Mike Johnson', email: 'mike@example.com', phone: '345-678-9012' },
];

const Contact = () => {
  return (
    <div className='bg-blue-500 text-white py-16 '>
      {/* Hero Section */}
      <div className="text-center mt-5 ">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Please fill out the form below or check our contacts.</p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between p-8">
        {/* Contact Form */}
        <div className="md:w-1/2 md:mr-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message:</label>
              <textarea
                name="message"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Contact List */}
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-2xl font-bold mb-6">Our Contacts</h2>
          <ul className="space-y-4">
            {contacts.map((contact, index) => (
              <li key={index} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
