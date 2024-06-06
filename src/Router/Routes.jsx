import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Hotel from "../Page/Home/Hotel";
import Home from "../Page/Home/Home";
import Login from "../Authentication/Login";
import Registertion from "../Authentication/Registertion";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Page/Dashboard/Dashboard";
import AddDashboardHome from "../Page/Dashboard/AddDashboardHome";
import AddDashboardcar from "../Page/Dashboard/AddDashboardcar";
import ManageServiceData from "../Page/Dashboard/ManageServiceData";
import CarCardDetatilsSection from "../Component/CarCardDetatilsSection";
import ErrorPage from "../Component/ErrorPage";
import DashboardEditData from "../Page/Dashboard/DashboardEditData";
import ProfileEditData from "../Page/Dashboard/ProfileEditData";
import RentCar from "../Page/Rent Car/RentCar";

// Define the routes using the named export
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     {
        path:"BuyRentCar",
        element:<RentCar/>
     },
      {
        path: "hotels",
        element: <Hotel />,
      },
      {
        path: "/rentCar/:id",
        element: <CarCardDetatilsSection />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/RentCar/${params?.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registertion",
        element: <Registertion />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        {" "}
        <DashboardLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "Addservicehome",
        element: <AddDashboardHome />,
      },
      {
        path: "Addservicecar",
        element: <AddDashboardcar />,
      },
      {
        path: "manageservicedata",
        element: <ManageServiceData />,
      },
      {
        path: "profile/edit/:id",
        element: <ProfileEditData/>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/users/edit/${params.id}`
        ),
      },
      {
        path: "AllProduct/edit/:id",
        element: <DashboardEditData />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/rentCar/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
