import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CgTrashEmpty } from 'react-icons/cg';
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ManageServiceData = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [search, setSearch] = useState([]);
  
  console.log(currentItems);
  
  useEffect(() => {
    async function fetchCar() {
      try {
        const response = await axios.get("http://localhost:3000/rentCar");
        if (response.status === 200) {
          setCurrentItems(response.data);
          setSearch(response.data);
        }
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchCar(); 
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/rentCar/${id}`);
      setCurrentItems((prevCars) => prevCars.filter((car) => car.id !== id));
      setSearch((prevCars) => prevCars.filter((car) => car.id !== id));
      toast.success("Car deleted successfully");
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const Filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(
      currentItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg>
            <span className="text-xl font-bold">340%</span>
          </div>
          <div className="text-lg font-bold">Sales</div>
          <div className="text-2xl font-bold">54</div>
          <div className="text-gray-500">this month</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg>
            <span className="text-xl font-bold">90%</span>
          </div>
          <div className="text-lg font-bold">Money</div>
          <div className="text-2xl font-bold">98</div>
          <div className="text-gray-500">this month</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
              />
            </svg>
            <span className="text-xl font-bold">280%</span>
          </div>
          <div className="text-lg font-bold">Clients</div>
          <div className="text-2xl font-bold">87</div>
          <div className="text-gray-500">this month</div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Data Table</h2>
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 border rounded-lg"
            onChange={Filter}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Data
          </button>
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                 Price
              </th>
              <th scope="col" className="px-6 py-3">
               Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {search?.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-100">
                <td className="px-6 py-4">{item._id}</td>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                 <Link to={`/dashboard/AllProduct/edit/${item._id}`} className="edit text-2xl">
                 <FaEdit />
                 </Link>
                  <button onClick={() => handleDelete(item._id)}  className="deleted text-2xl">
                  <CgTrashEmpty />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageServiceData;
