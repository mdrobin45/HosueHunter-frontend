import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import OwnerDashboardLayout from "../Layouts/OwnerDashboardLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import EnrolledCourses from "../Pages/DashboardPages/EnrolledCourses/EnrolledCourses";
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
      path: "/owner-dashboard",
      element: <OwnerDashboardLayout />,
      children: [
         {
            path: "owner-profile",
            element: <Profile />,
         },
         {
            path: "enrolled",
            element: <EnrolledCourses />,
         },
      ],
   },
]);

// Export router
export default router;
