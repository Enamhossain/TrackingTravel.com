// eslint-disable-next-line no-unused-vars
import React from 'react'

const Dashboard = () => {
  return (
    <div>dashboard</div>
)
}

export default Dashboard
// <div className="container mx-auto mt-10 p-8">
//   <h2 className="text-2xl font-bold mb-6 text-center">Dashboard Overview</h2>

//   {/* Line Chart for Revenue */}
//   <div className="mb-8">
//     <h3 className="text-xl font-semibold mb-4">Monthly Revenue</h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart data={revenueData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>

//   {/* Bar Chart for Car Types */}
//   <div className="mb-8">
//     <h3 className="text-xl font-semibold mb-4">Car Types</h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart data={carTypeData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="type" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="count" fill="#82ca9d" />
//       </BarChart>
//     </ResponsiveContainer>
//   </div>

//   {/* Pie Chart for Ratings Distribution */}
//   <div className="mb-8">
//     <h3 className="text-xl font-semibold mb-4">Ratings Distribution</h3>
//     <ResponsiveContainer width="100%" height={300}>
//       <PieChart>
//         <Pie
//           data={ratingData}
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//           label
//         >
//           {ratingData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </ResponsiveContainer>
//   </div>
// </div>