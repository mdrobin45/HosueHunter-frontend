import { useQuery } from "@tanstack/react-query";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Ratings from "../../Components/Ratings/Ratings";
import useAPI from "../../Hooks/useAPI";
import LeftCard from "./LeftCard/LeftCard";
import RightCard from "./RightCard/RightCard";
import styles from "./styles.module.css";
const CourseDetails = () => {
   const { id } = useParams();
   const { singleCourse } = useAPI();

   // Fetch course
   const { data: courseDetails = {} } = useQuery({
      queryKey: ["courseDetails"],
      queryFn: () => singleCourse(id),
   });

   return (
      <section className="py-10">
         <Container>
            <div>
               <h2 className={styles.courseTitle}>{courseDetails?.name}</h2>
               <div className={styles.metaDataWrapper}>
                  <p className={styles.metaDataIconWrapper}>
                     <FaChalkboardTeacher className={styles.metaDataIcon} />
                     By {courseDetails?.instructor}
                  </p>
                  <p className={styles.metaDataIconWrapper}>
                     <AiOutlineGlobal className={styles.metaDataIcon} />
                     {courseDetails?.location}
                  </p>
                  <Ratings />
               </div>
            </div>
            <section className="flex gap-3 mt-6">
               <LeftCard courseDetails={courseDetails} />
               <RightCard courseDetails={courseDetails} />
            </section>
         </Container>
      </section>
   );
};

export default CourseDetails;
