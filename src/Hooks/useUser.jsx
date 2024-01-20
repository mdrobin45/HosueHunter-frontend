import { jwtDecode } from "jwt-decode";

const useUser = () => {
   const token = localStorage.getItem("access_token");
   const decoded = jwtDecode(token);

   const name = decoded?.name || null;
   const email = decoded?.email || null;
   return { name, email };
};

export default useUser;
