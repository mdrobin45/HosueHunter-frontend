import toast from "react-hot-toast";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ratings from "../../../Components/Ratings/Ratings";
import useAPI from "../../../Hooks/useAPI";
import useUser from "../../../Hooks/useUser";
import styles from "./styles.module.css";

const EnrolledCourses = () => {
   const { dbUser, refetchUser } = useUser();
   const { updateCourseStatus } = useAPI();
   let enrolledCourses = dbUser?.enrolled;
   enrolledCourses = enrolledCourses.toReversed();

   // Handle mark as complete
   const handleMarkComplete = (courseId) => {
      updateCourseStatus(dbUser?.email, courseId).then((res) => {
         if (res.modifiedCount) {
            console.log("Completed");
            toast.success("Completed");
            refetchUser();
         }
      });
   };
   return (
      <div className={styles.gridMain}>
         {enrolledCourses.map((item) => (
            <div key={item?.course._id} className={styles.courseCard}>
               <div
                  className={styles.cardThumbnail}
                  style={{
                     backgroundImage: `url(${item?.course.thumbnail})`,
                     backgroundPosition: "center center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                  }}></div>
               <div className="p-5">
                  <Link to={`/course/${item?.course._id}`}>
                     <h5 className={styles.cardTitle}>{item?.course.name}</h5>
                  </Link>
                  <p className={styles.instructorName}>
                     {item?.course.instructor}
                  </p>
                  <Ratings />
                  <div className={styles.cardMetaData}>
                     <FaCalendar className="text-primary" />
                     {item?.dueDate}
                  </div>

                  <div className="flex justify-between mb-1">
                     <span className="text-base font-medium text-primary dark:text-white">
                        Completed
                     </span>
                     <span className="text-sm font-medium text-primary dark:text-white">
                        {item?.complete}%
                     </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                     <div
                        className={`bg-blue-600 w-[50%] h-2.5 rounded-full`}></div>
                  </div>
                  <button
                     disabled={item?.status === "completed"}
                     onClick={() => {
                        handleMarkComplete(item?.course._id);
                     }}
                     className={`${
                        item?.status === "completed"
                           ? "opacity-70 text-white bg-primary py-2 w-full mt-4 rounded-md"
                           : "text-white bg-primary py-2 w-full mt-4 rounded-md"
                     }`}>
                     {item?.status !== "completed"
                        ? "Mark as Complete"
                        : "Completed"}
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default EnrolledCourses;
