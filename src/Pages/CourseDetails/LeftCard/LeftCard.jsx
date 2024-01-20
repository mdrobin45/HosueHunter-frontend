import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./styles.module.css";

const LeftCard = ({ courseDetails }) => {
   const [collapse, setCollapse] = useState(null);
   const [syllabusOpen, setSyllabusOpen] = useState(false);
   const prerequisites = courseDetails?.prerequisites || [];
   const syllabus = courseDetails?.syllabus || [];
   return (
      <div className={styles.leftSideWrapper}>
         <h2 className={styles.heading}>Description</h2>
         <p className="text-gray-500">{courseDetails?.description}</p>
         <h2 className={styles.heading2}>Pre Requisites</h2>
         <ul>
            {prerequisites.map((item, index) => (
               <li key={index} className={styles.prerequisitesItem}>
                  <FaArrowCircleRight className="text-primary" /> {item}
               </li>
            ))}
         </ul>
         <h2 className={styles.heading2}>Syllabus</h2>
         <div>
            {syllabus.map((item, index) => (
               <div key={index}>
                  <h2>
                     <button
                        onClick={() => {
                           setCollapse(index);
                           setSyllabusOpen(!syllabusOpen);
                        }}
                        type="button"
                        className={`${styles.according} ${
                           syllabus.length === index + 1
                              ? "rounded-t-none border-b-1"
                              : ""
                        }`}>
                        <span>{item?.topic}</span>
                        <svg
                           data-accordion-icon
                           className="w-3 h-3 rotate-180 shrink-0"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 10 6">
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                           />
                        </svg>
                     </button>
                  </h2>
                  <div
                     className={`${
                        collapse !== index || syllabusOpen === false
                           ? "hidden"
                           : "visible"
                     }`}>
                     <div className={styles.accordingContentWrapper}>
                        <p className={styles.accordingContent}>
                           {item?.content}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default LeftCard;
