import axios from "axios";

const axiosRequest = axios.create({
   baseURL: import.meta.env.VITE_SERVER_API,
});

const useAPI = () => {
   // const { userId } = useUser();

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

   // Sort courses
   const sortCourses = async (course, instructor) => {
      const { data } = await axiosRequest.get(
         `/course/sort?course=${course}&instructor=${instructor}`
      );
      return data;
   };

   // Get single course
   const singleCourse = async (id) => {
      const { data } = await axiosRequest.get(`/course/${id}`);
      return data;
   };

   // Fetch user
   const fetchUser = async (email) => {
      const { data } = await axiosRequest.get(`/users?email=${email}`);
      return data;
   };

   // Course enroll
   const enrollCourse = async (info) => {
      const enrollmentInfo = {
         dueDate: info.dueDate,
         course: info.course,
      };
      const { data } = await axiosRequest.post(
         `/course/enroll?userId=${info.userId}`,
         enrollmentInfo
      );
      return data;
   };

   // Update course status
   const updateCourseStatus = async (email, courseId) => {
      const { data } = await axiosRequest.put(
         `/course/complete?email=${email}&courseId=${courseId}`
      );
      return data;
   };

   // Update like count
   const updateLikeCount = async (courseId) => {
      const { data } = await axiosRequest.put(
         `/course/like?courseId=${courseId}`
      );
      return data;
   };

   return {
      userLogin,
      userRegister,
      allCourses,
      sortCourses,
      singleCourse,
      fetchUser,
      enrollCourse,
      updateCourseStatus,
      updateLikeCount,
   };
};

export default useAPI;
