import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPresentationLine, RiThumbUpLine } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import Ratings from "../../../Components/Ratings/Ratings";
import useAPI from "../../../Hooks/useAPI";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./styles.module.css";

const CourseListing = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { allCourses, sortCourses, updateLikeCount } = useAPI();
   const courseName = searchParams.get("course");
   const instructor = searchParams.get("instructor");
   const [displayData, setDisplayData] = useState([]);

   // Fetch data
   const {
      isPending,
      data: courses = [],
      refetch: reloadAllCourse,
   } = useQuery({
      queryKey: ["allCourses"],
      queryFn: () => allCourses(),
   });

   // Fetch courses
   const {
      isFetching: filterPending,
      data: filteredCourse,
      refetch: loadSortedData,
   } = useQuery({
      queryKey: ["sortedCourses"],
      queryFn: () => sortCourses(courseName, instructor),
      enabled: false,
   });
   useEffect(() => {
      if (!filteredCourse) {
         setDisplayData(courses);
      } else {
         setDisplayData(filteredCourse);
      }
   }, [courses, filteredCourse]);

   // Handle update like
   const handleUpdateLikeCount = (courseId) => {
      updateLikeCount(courseId).then((res) => {
         if (res) {
            toast.success("You liked this course");
            reloadAllCourse();
         }
      });
   };

   return (
      <>
         <SearchBar
            filterPending={filterPending}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            loadSortedData={loadSortedData}
         />
         {!isPending ? (
            <div className={styles.gridMain}>
               {displayData.map((item) => (
                  <div key={item._id} className={styles.courseCard}>
                     <div
                        className={styles.cardThumbnail}
                        style={{
                           backgroundImage: `url(${item.thumbnail})`,
                           backgroundPosition: "center center",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                        }}></div>
                     <div className="p-5">
                        <Link to={`/course/${item._id}`}>
                           <h5 className={styles.cardTitle}>{item.name}</h5>
                        </Link>
                        <p className={styles.instructorName}>
                           {item.instructor}
                        </p>
                        <Ratings />
                        <p className={styles.coursePrice}>${item.price}</p>
                        <div className={styles.cardFooterWrapper}>
                           <div className={styles.cardMetaData}>
                              <MdOutlineWatchLater /> {item.duration}
                           </div>
                           <div className={styles.cardMetaData}>
                              <FaPeopleGroup />
                              {item.students} Students
                           </div>
                           <div className={styles.cardMetaData}>
                              <RiPresentationLine />
                              {item.location}
                           </div>
                        </div>
                        <p className="pt-2 flex items-center gap-2">
                           <RiThumbUpLine
                              onClick={() => {
                                 handleUpdateLikeCount(item._id);
                              }}
                              className="text-2xl"
                           />
                           <span>{item.like}</span>
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div className="h-[80vh] flex items-center justify-center">
               <FadeLoader color="#36d7b7" />
            </div>
         )}
      </>
   );
};

export default CourseListing;
