// eslint-disable-next-line no-unused-vars
import React from 'react';

const AddDashboardCar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white w-full py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Add a New Car</h1>
          <p className="text-lg">Fill out the form below to add a new car to the dashboard.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white w-full max-w-2xl mx-auto mt-10 p-8 shadow-lg rounded-lg">
        <form>
          {/* Car Make */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
              Car Make
            </label>
            <input
              type="text"
              id="make"
              name="make"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car make"
            />
          </div>
          {/* Car Model */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
              Car Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car model"
            />
          </div>
          {/* Year */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car year"
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car price"
            />
          </div>
          {/* Old Price */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPrice">
              Old Price
            </label>
            <input
              type="number"
              id="oldPrice"
              name="oldPrice"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter old price"
            />
          </div>
          {/* Discount */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discount">
              Discount (%)
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter discount percentage"
            />
          </div>
          {/* Tag */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter tag"
            />
          </div>
          {/* Cancellation Policy */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cancellation">
              Cancellation Policy
            </label>
            <textarea
              id="cancellation"
              name="cancellation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter cancellation policy"
            />
          </div>
          {/* Features */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="features">
              Features
            </label>
            <textarea
              id="features"
              name="features"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter features"
            />
          </div>
          {/* Type */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car type"
            />
          </div>
          {/* Image */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter image URL"
            />
          </div>
          {/* Note */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter note"
            />
          </div>
          {/* Reviews */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reviews">
              Reviews
            </label>
            <textarea
              id="reviews"
              name="reviews"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter reviews"
            />
          </div>
          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              id="rating"
              name="rating"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter rating"
            />
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDashboardCar;
