import {
   FaChalkboardTeacher,
   FaChartPie,
   FaRegCalendarAlt,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";
import styles from "./styles.module.css";

const RightCard = ({ courseDetails }) => {
   return (
      <div className={styles.mainWrapper}>
         <div
            className={styles.thumbnail}
            style={{
               backgroundImage: `url(${courseDetails?.thumbnail})`,
               backgroundPosition: "center center",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}></div>
         <h2 className={styles.includeHeading}>Course Includes:</h2>
         <ul>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <LiaMoneyBillWaveSolid className={styles.courseInfoIcon} />{" "}
                  Price
               </p>
               <p className="text-xl font-bold text-red-500">
                  ${courseDetails?.price}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaChalkboardTeacher className={styles.courseInfoIcon} />{" "}
                  Instructor
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.instructor}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <MdOutlineWatchLater className={styles.courseInfoIcon} />{" "}
                  Duration
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.duration}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaChartPie className={styles.courseInfoIcon} /> Enrollment
                  Status
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.enrollmentStatus}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaMapLocation className={styles.courseInfoIcon} /> Location
               </p>
               <p className={styles.courseInfoValue}>
                  {courseDetails?.location}
               </p>
            </li>
            <li className={styles.courseInfoWrapper}>
               <p className={styles.courseInfoKey}>
                  <FaRegCalendarAlt className={styles.courseInfoIcon} />{" "}
                  Schedule
               </p>
               <p className={styles.scheduleInfo}>{courseDetails?.schedule}</p>
            </li>
         </ul>
         <button className={styles.enrollBtn}>Enroll Now</button>
      </div>
   );
};

export default RightCard;
