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

   // Get courses
   const allCourses = async () => {
      const { data } = await axiosRequest.get("/course");
      return data;
   };

   return {
      userLogin,
      userRegister,
      allCourses,
   };
};

export default useAPI;
