import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useMemo, useState } from "react";
import useAPI from "../Hooks/useAPI";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
   const [decoded, setDecoded] = useState({});
   const { fetchUser } = useAPI();

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

   const name = decoded?.name || null;
   const email = decoded?.email || null;

   // Fetch user
   const { data: dbUser } = useQuery({
      queryKey: ["fetchUser", name, email],
      queryFn: () => fetchUser(email),
   });

   const contextValue = useMemo(
      () => ({
         token,
         decoded,
         dbUser,
         handleSetToken,
      }),
      [dbUser, decoded, token]
   );

   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;
