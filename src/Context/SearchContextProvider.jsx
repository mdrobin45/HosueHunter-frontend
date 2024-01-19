import { createContext } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = createContext();
const SearchContextProvider = ({ children }) => {
   const [searchParams, setSearchParams] = useSearchParams();

   const contextValue = { searchParams, setSearchParams };
   return (
      <SearchContext.Provider value={contextValue}>
         {children}
      </SearchContext.Provider>
   );
};

export default SearchContextProvider;
