import axios from "axios";

const axiosRequest = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
});

const useAPI = () => {
   // User login
   const userLogin = async (loginDetails) => {
      const { data } = await axiosRequest.post("/auth/login", loginDetails);
      return data;
   };

   // User register
   const userRegister = async (userInfo) => {
      const { data } = await axiosRequest.post("/auth/registration", userInfo);
      return data;
   };

   // Fetch user
   const fetchUser = async (email) => {
      const { data } = await axiosRequest.get(`/users?email=${email}`);
      return data;
   };

   // Add new house
   const AddNewHouse = async (houseData) => {
      const { data } = await axiosRequest.post(`/house/add-new`, { houseData });
      return data;
   };

   return {
      userLogin,
      userRegister,
      fetchUser,
      AddNewHouse,
   };
};

export default useAPI;
