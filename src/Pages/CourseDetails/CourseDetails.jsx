import { AiOutlineGlobal } from "react-icons/ai";
import {
   FaArrowCircleRight,
   FaChalkboardTeacher,
   FaChartPie,
   FaRegCalendarAlt,
} from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import useAPI from "../../Hooks/useAPI";
const CourseDetails = () => {
   const [collapse, setCollapse] = useState(null);
   const [syllabusOpen, setSyllabusOpen] = useState(false);
   const { id } = useParams();
   const { singleCourse } = useAPI();

   // Fetch course
   const { data: courseDetails = {} } = useQuery({
      queryKey: ["courseDetails"],
      queryFn: () => singleCourse(id),
   });

   const prerequisites = courseDetails?.prerequisites || [];
   const syllabus = courseDetails?.syllabus || [];
   return (
      <section className="py-10">
         <Container>
            <div>
               <h2 className="text-4xl font-bold">{courseDetails?.name}</h2>
               <div className="flex items-center gap-4 pt-3">
                  <p className="flex items-center gap-1">
                     <FaChalkboardTeacher className="text-xl text-primary" />
                     By {courseDetails?.instructor}
                  </p>
                  <p className="flex items-center gap-1">
                     <AiOutlineGlobal className="text-xl text-primary" />
                     {courseDetails?.location}
                  </p>
                  <div className="flex items-center">
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
               </div>
            </div>
            <section className="flex gap-3 mt-6">
               <div className="bg-white p-6 rounded w-[70%]">
                  <h2 className="text-3xl pb-3 font-bold">Description</h2>
                  <p className="text-gray-500">{courseDetails?.description}</p>
                  <h2 className="text-3xl font-bold pb-3 pt-4">
                     Pre Requisites
                  </h2>
                  <ul>
                     {prerequisites.map((item, index) => (
                        <li
                           key={index}
                           className="flex text-gray-500 items-center gap-2 py-1">
                           <FaArrowCircleRight className="text-primary" />{" "}
                           {item}
                        </li>
                     ))}
                  </ul>
                  <h2 className="text-3xl font-bold pb-3 pt-4">Syllabus</h2>
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
                                 className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 gap-3 ${
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
                              id="accordion-collapse-body-1"
                              className={`${
                                 collapse !== index || syllabusOpen === false
                                    ? "hidden"
                                    : "visible"
                              }`}
                              aria-labelledby="accordion-collapse-heading-1">
                              <div className="p-5 border border-b-0 border-gray-200 ">
                                 <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    {item?.content}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="w-[30%] p-6 bg-white">
                  <div
                     className="w-full h-52 rounded-md"
                     style={{
                        backgroundImage: `url(${courseDetails?.thumbnail})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}></div>
                  <h2 className="text-2xl mt-2 pb-3 ">Course Includes:</h2>
                  <ul>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <LiaMoneyBillWaveSolid className="text-primary text-2xl" />{" "}
                           Price
                        </p>
                        <p className="text-xl font-bold text-red-500">
                           ${courseDetails?.price}
                        </p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaChalkboardTeacher className="text-primary text-2xl" />{" "}
                           Instructor
                        </p>
                        <p className="text-xl text-gray-500">
                           {courseDetails?.instructor}
                        </p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <MdOutlineWatchLater className="text-primary text-2xl" />{" "}
                           Duration
                        </p>
                        <p className="text-xl text-gray-500">
                           {courseDetails?.duration}
                        </p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaChartPie className="text-primary text-2xl" />{" "}
                           Enrollment Status
                        </p>
                        <p className="text-xl text-gray-500">
                           {courseDetails?.enrollmentStatus}
                        </p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaMapLocation className="text-primary text-2xl" />{" "}
                           Location
                        </p>
                        <p className="text-xl text-gray-500">
                           {courseDetails?.location}
                        </p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl w-[50%] flex gap-2 items-center text-gray-600 font-semibold">
                           <FaRegCalendarAlt className="text-primary text-2xl" />{" "}
                           Schedule
                        </p>
                        <p className="text-xl text-right text-gray-500 w-[50%]">
                           {courseDetails?.schedule}
                        </p>
                     </li>
                  </ul>
                  <button className="text-xl font-semibold rounded-md mt-6 text-white bg-primary w-full py-3">
                     Enroll Now
                  </button>
               </div>
            </section>
         </Container>
      </section>
   );
};

export default CourseDetails;
