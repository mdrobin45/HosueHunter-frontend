import { useQuery } from "@tanstack/react-query";
// import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import useAPI from "./useAPI";

const useUser = () => {
   const { fetchUser } = useAPI();

   const { decoded } = useContext(AuthContext);

   const name = decoded?.name || null;
   const email = decoded?.email || null;

   // Fetch user
   const { data: dbUser, isPending: loadingUser } = useQuery({
      queryKey: ["fetchUser", name, email],
      queryFn: () => fetchUser(email),
   });

   const userId = dbUser?._id;

   return { name, email, userId, loadingUser };
};

export default useUser;
