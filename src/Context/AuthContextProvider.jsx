import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
   const [decoded, setDecoded] = useState({});

   // Hold the token
   const [token, setToken] = useState(localStorage.getItem("access_token"));

   // Handle set token
   const handleSetToken = (newToken) => {
      setToken(newToken);
   };

   useEffect(() => {
      if (token) {
         localStorage.setItem("access_token", token);
      } else {
         localStorage.removeItem("access_token");
      }
   }, [token]);

   useEffect(() => {
      if (token) {
         const info = jwtDecode(token);
         setDecoded(info);
      }
   }, [token]);

   const contextValue = useMemo(
      () => ({
         token,
         decoded,
         handleSetToken,
      }),
      [decoded, token]
   );

   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
