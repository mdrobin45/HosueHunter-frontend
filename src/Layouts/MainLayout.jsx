import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
   return (
      <div>
         <Header />
         <div className="mt-10">
            <Outlet />
         </div>
      </div>
   );
};

export default MainLayout;
