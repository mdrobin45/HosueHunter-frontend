import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const OwnerDashboardLayout = () => {
   const [sidebar, setSidebar] = useState(false);
   return (
      <>
         <button
            onClick={() => {
               setSidebar(!sidebar);
            }}
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg
               className="w-6 h-6"
               aria-hidden="true"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
               !sidebar ? "-translate-x-full sm:translate-x-0" : ""
            }`}>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
               <ul className="space-y-2 font-medium">
                  <li
                     onClick={() => {
                        setSidebar(!sidebar);
                     }}>
                     <Link
                        to="/owner-dashboard/owner-profile"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20">
                           <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        <span className="ms-3">My Profile</span>
                     </Link>
                  </li>
                  <li
                     onClick={() => {
                        setSidebar(!sidebar);
                     }}>
                     <Link
                        to="/owner-dashboard/owner-houses"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24">
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                           />
                        </svg>
                        <span className="ms-3">Houses</span>
                     </Link>
                  </li>
                  <li
                     onClick={() => {
                        setSidebar(!sidebar);
                     }}>
                     <Link
                        to="/owner-dashboard/add-new-house"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 24 24">
                           <path
                              fillRule="evenodd"
                              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z"
                              clipRule="evenodd"
                           />
                        </svg>

                        <span className="ms-3">Add New House</span>
                     </Link>
                  </li>
                  <hr />
                  <li
                     onClick={() => {
                        setSidebar(!sidebar);
                     }}>
                     <Link
                        to="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20">
                           <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Home
                        </span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>

         <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default OwnerDashboardLayout;
