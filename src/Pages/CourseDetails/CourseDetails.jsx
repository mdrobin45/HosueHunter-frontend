import { AiOutlineGlobal } from "react-icons/ai";
import {
   FaArrowCircleRight,
   FaChalkboardTeacher,
   FaChartPie,
   FaRegCalendarAlt,
} from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { MdOutlineWatchLater } from "react-icons/md";

import { useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import Container from "../../Components/Container/Container";
const CourseDetails = () => {
   const [collapse, setCollapse] = useState(null);
   const [syllabusOpen, setSyllabusOpen] = useState(false);
   return (
      <section className="py-10">
         <Container>
            <div>
               <h2 className="text-4xl font-bold">
                  Starting SEO as your Home Based Business
               </h2>
               <div className="flex items-center gap-4 pt-3">
                  <p className="flex items-center gap-1">
                     <FaChalkboardTeacher className="text-xl text-primary" />
                     By Robin Rana
                  </p>
                  <p className="flex items-center gap-1">
                     <AiOutlineGlobal className="text-xl text-primary" />
                     Online
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
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Quibusdam reiciendis quasi corrupti, quisquam temporibus
                     alias libero sequi sunt officiis ab unde error debitis quas
                     porro. Mollitia repudiandae consequuntur quaerat quod?
                  </p>
                  <h2 className="text-3xl font-bold pb-3 pt-4">
                     Pre Requisites
                  </h2>
                  <ul>
                     <li className="flex items-center gap-2 py-1">
                        <FaArrowCircleRight className="text-primary" />{" "}
                        JavaScript
                     </li>
                     <li className="flex items-center gap-2">
                        <FaArrowCircleRight className="text-primary" />{" "}
                        Networking
                     </li>
                  </ul>
                  <h2 className="text-3xl font-bold pb-3 pt-4">Syllabus</h2>

                  <div>
                     <h2>
                        <button
                           onClick={() => {
                              setCollapse(1);
                              setSyllabusOpen(!syllabusOpen);
                           }}
                           type="button"
                           className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3">
                           <span>What is Flowbite?</span>
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
                           collapse !== 1 || syllabusOpen === false
                              ? "hidden"
                              : "visible"
                        }`}
                        aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 ">
                           <p className="mb-2 text-gray-500 dark:text-gray-400">
                              Flowbite is an open-source library of interactive
                              components built on top of Tailwind CSS including
                              buttons, dropdowns, modals, navbars, and more.
                           </p>
                           <p className="text-gray-500 dark:text-gray-400">
                              Check out this guide to learn how to{" "}
                              <a
                                 href="/docs/getting-started/introduction/"
                                 className="text-blue-600 dark:text-blue-500 hover:underline">
                                 get started
                              </a>{" "}
                              and start developing websites even faster with
                              components on top of Tailwind CSS.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-[30%] p-6 bg-white">
                  <div
                     className="w-full h-52 rounded-md"
                     style={{
                        backgroundImage: `url(https://i.ibb.co/YRttc6g/1.jpg)`,
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
                        <p className="text-xl font-bold text-red-500">$30</p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaChalkboardTeacher className="text-primary text-2xl" />{" "}
                           Instructor
                        </p>
                        <p className="text-xl">Robin Rana</p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <MdOutlineWatchLater className="text-primary text-2xl" />{" "}
                           Duration
                        </p>
                        <p className="text-xl">8 Weeks</p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaChartPie className="text-primary text-2xl" />{" "}
                           Enrollment Status
                        </p>
                        <p className="text-xl">Open</p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl flex gap-2 items-center text-gray-600 font-semibold">
                           <FaMapLocation className="text-primary text-2xl" />{" "}
                           Location
                        </p>
                        <p className="text-xl">Online</p>
                     </li>
                     <li className="flex items-center justify-between border-b py-3">
                        <p className="text-xl w-[50%] flex gap-2 items-center text-gray-600 font-semibold">
                           <FaRegCalendarAlt className="text-primary text-2xl" />{" "}
                           Schedule
                        </p>
                        <p className="text-xl text-right w-[50%]">
                           Saturdays, 10:00 AM - 12:00 PM
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
