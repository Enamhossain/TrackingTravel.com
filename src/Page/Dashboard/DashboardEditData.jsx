// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DashboardEditData = () => {
  // eslint-disable-next-line react/prop-types
  const car = useLoaderData();

  

  const [title, setTitle] = useState(car.title);
  const [price, setPrice] = useState(car.price);
  const [brand, setBrand] = useState(car.type);
  const [note, setNote] = useState(car.note);
  const [oldPrice, setOldPrice] = useState(car.oldPrice);
  const [discount, setDiscount] = useState(car.discount);
  const [review, setReview] = useState(car.review);
  const [rating, setRating] = useState(car.rating);
  const [image_url, setImageURL] = useState(car.image);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const discount = form.discount.value;
    const price = form.price.value;
    const oldPrice = form.oldPrice.value;
    const rating = form.rating.value;
    const reviews = form.reviews.value;
    const image_url = form.image_url.value;

    const data = { title, price, discount, type, oldPrice, rating, reviews, image_url };

    try {
      const response = await fetch(`https://tracking-trip-server.vercel.app/rentCar/${car._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Product updated");
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-full p-0 m-0">
      <div className="bg-white p-5 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Car Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4 grid grid-col-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Type:</label>
            <input
              type="text"
              name="type"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Old Price:</label>
            <input
              type="text"
              name="oldPrice"
              value={oldPrice}
              onChange={(e) => setOldPrice(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Discount:</label>
            <input
              type="text"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating:</label>
            <input
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reviews:</label>
            <input
              type="text"
              name="reviews"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Note:</label>
            <input
              type="text"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-center col-span-2 space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardEditData;
