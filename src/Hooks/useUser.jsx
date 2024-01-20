import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import useAPI from "./useAPI";

const useUser = () => {
   // const [userId, setUserId] = useState(null);
   const { fetchUser } = useAPI();
   const [decoded, setDecoded] = useState(null);
   const token = localStorage.getItem("access_token");
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

   const userId = dbUser?._id;

   return { name, email, userId };
};

export default useUser;
