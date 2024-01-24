import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { dbUser } = useAuth();

   if (!dbUser?.email) {
      return <Navigate to="/login" />;
   }
   return children;
};

export default PrivateRoute;
