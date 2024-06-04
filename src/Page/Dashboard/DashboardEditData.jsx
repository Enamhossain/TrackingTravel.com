// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const DashboardEditData = ({ handleCloseEditModal }) => {
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const price = form.price.value;
    const Oldprice = form.Oldprice.value;
    const discount = form.discount.value;
    const image_url = form.image_url.value;

    const data = { title, type, price, discount, image_url, Oldprice };

    await fetch(`http://localhost:3000/rentCar/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => toast.success("Product updated "));
  };

  return (
    <div className="p-4">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded-md shadow-md max-w-lg w-full">
          <h1 className="text-2xl font-bold mb-6">Edit Car Data</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 grid grid-cols-2 gap-3"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title:
              </label>
              <input
                type="text"
                name="title"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type:
              </label>
              <input
                type="text"
                name="type"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price:
              </label>
              <input
                type="text"
                name="price"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Old Price:
              </label>
              <input
                type="text"
                name="oldPrice"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Discount:
              </label>
              <input
                type="text"
                name="discount"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating:
              </label>
              <input
                type="text"
                name="rating"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reviews:
              </label>
              <input
                type="text"
                name="reviews"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Note:
              </label>
              <input
                type="text"
                name="note"
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="image_url"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL:
              </label>
              <input
                type="text"
                id="image_url"
                name="image_url" // Added name attribute
                required
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </form>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCloseEditModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEditData;
