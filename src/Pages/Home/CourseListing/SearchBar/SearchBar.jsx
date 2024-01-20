import { useState } from "react";

const SearchBar = ({ loadSortedData, setSearchParams, filterPending }) => {
   const [select, setSelect] = useState(1);

   // handle change select value
   const selectChange = (e) => {
      setSelect(e.target.value);
   };

   // handle change search input value
   const searchInputChange = (e) => {
      const value = e.target.value;

      if (select == 1) {
         setSearchParams({ course: value, instructor: null });
      } else if (select == 2) {
         setSearchParams({ course: null, instructor: value });
      }
   };

   // Handle search button
   const handleSearchBtn = () => {
      loadSortedData();
   };

   return (
      <div className="w-2/4 mx-auto py-10">
         <div className="flex items-center gap-3 pb-4">
            <div className="flex items-center ">
               <input
                  defaultChecked
                  onChange={selectChange}
                  id="default-radio-1"
                  type="radio"
                  value="1"
                  name="default-radio"
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary  "
               />
               <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Search by course name
               </label>
            </div>
            <div className="flex items-center">
               <input
                  onChange={selectChange}
                  id="default-radio-2"
                  type="radio"
                  value="2"
                  name="default-radio"
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary"
               />
               <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Search by instructor
               </label>
            </div>
         </div>

         <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
               </svg>
            </div>
            <input
               onChange={searchInputChange}
               type="search"
               id="default-search"
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
               placeholder="Search course, instructor"
               required
            />
         </div>
         <button
            onClick={handleSearchBtn}
            type="button"
            className="text-white mt-4 flex items-center justify-center bg-primary font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            {!filterPending ? "Search" : "Loading..."}
         </button>
      </div>
   );
};

export default SearchBar;
