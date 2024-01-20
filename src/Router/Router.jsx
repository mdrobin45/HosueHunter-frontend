import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Profile from "../Pages/DashboardPages/Profile/Profile";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/course/:id",
            element: <CourseDetails />,
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
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            path: "profile",
            element: <Profile />,
         },
      ],
   },
]);

// Export router
export default router;
