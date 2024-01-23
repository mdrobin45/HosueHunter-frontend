import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import OwnerDashboardLayout from "../Layouts/OwnerDashboardLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import AddNewHouse from "../Pages/OwnerDashboardPages/AddNewHouse/AddNewHouse";
import OwnerHouses from "../Pages/OwnerDashboardPages/Houses/OwnerHouses";
import OwnerProfile from "../Pages/OwnerDashboardPages/Profile/OwnerProfile";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/owner-dashboard",
      element: <OwnerDashboardLayout />,
      children: [
         {
            path: "owner-profile",
            element: <OwnerProfile />,
         },
         {
            path: "owner-houses",
            element: <OwnerHouses />,
         },
         {
            path: "add-new-house",
            element: <AddNewHouse />,
         },
      ],
   },
]);

// Export router
export default router;
