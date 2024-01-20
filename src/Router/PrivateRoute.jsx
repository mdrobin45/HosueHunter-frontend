import { Navigate } from "react-router-dom";
import useUser from "../Hooks/useUser";

const PrivateRoute = ({ children }) => {
   const { email } = useUser();
   if (!email) {
      return <Navigate to="/login" />;
   }
   return { children };
};

export default PrivateRoute;
