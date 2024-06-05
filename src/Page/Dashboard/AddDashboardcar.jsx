// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
const AddDashboardCar = () => {

  const handleCreateCar = async (e) => {
    e.preventDefault();
    const form = e.target;

    const carData = {
      id: form.id.value || Date.now().toString(),
      title: form.title.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      oldPrice: form.oldPrice.value,
      discount: form.discount.value,
      tags: form.tags.value ? form.tags.value.split(',') : [],
      cancellation: form.cancellation.value,
      features: form.features.value ? form.features.value.split(',') : [],
      type: form.type.value,
      image: form.image.value,
      note: form.note.value,
      reviews: form.reviews.value,
      rating: form.rating.value,
    };

    if (!carData.title || !carData.model || !carData.year || !carData.price || !carData.type) {
      toast.error('Please fill in all required fields!');
      return;
    }

    try {
      await axios.post('https://trackingtrip-server.onrender.com/rentCar', carData);
      toast.success('Successfully added car!');
      form.reset();
    } catch (error) {
      toast.error('Error adding car. Please try again.');
      console.error('Error creating car:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
     
      <div className="bg-blue-600 text-white w-full py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Add a New Car</h1>
          <p className="text-lg">Fill out the form below to add a new car to the dashboard.</p>
        </div>
      </div>

   
      <div className="bg-white w-full max-w-2xl mx-auto mt-10 p-8 shadow-lg rounded-lg">
        <form onSubmit={handleCreateCar} className='grid grid-cols-2 gap-2'>
      
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
              Car Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter car make"
            />
          </div>
          
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
       
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
              Tag
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter tag"
            />
          </div>
         
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
         
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image 
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              
            />
          </div>
          
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
