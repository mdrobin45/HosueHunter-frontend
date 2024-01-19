const SearchBar = () => {
   return (
      <div className="w-2/4 mx-auto py-10">
         <div className="flex items-center gap-3 pb-4">
            <div className="flex items-center ">
               <input
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
                  checked
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
               type="search"
               id="default-search"
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
               placeholder="Search course, instructor"
               required
            />
         </div>
      </div>
   );
};

export default SearchBar;
