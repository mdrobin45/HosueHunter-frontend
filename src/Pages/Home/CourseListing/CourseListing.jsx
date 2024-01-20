import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import { useSearchParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import useAPI from "../../../Hooks/useAPI";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./styles.module.css";

const CourseListing = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const { allCourses, sortCourses } = useAPI();
   const courseName = searchParams.get("course");
   const instructor = searchParams.get("instructor");
   const [displayData, setDisplayData] = useState([]);

   // Fetch data
   const { isPending, data: courses = [] } = useQuery({
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
                        <a href="#">
                           <h5 className={styles.cardTitle}>{item.name}</h5>
                        </a>
                        <p className={styles.instructorName}>
                           {item.instructor}
                        </p>
                        <div className={styles.ratingWrapper}>
                           <svg
                              className="w-4 h-4 text-yellow-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              className="w-4 h-4 text-yellow-500 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              className="w-4 h-4 text-yellow-500 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              className="w-4 h-4 text-yellow-500 ms-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <svg
                              className="w-4 h-4 ms-1 text-yellow-500 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20">
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                           </svg>
                           <p className="ml-2">(5.0/3 Ratings)</p>
                        </div>
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
