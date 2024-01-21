import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import logo from "../../assets/images/logo.svg";
import Container from "../Container/Container";
import styles from "./styles.module.css";

const Header = () => {
   const { email } = useUser();
   const [dropdown, setDrawdown] = useState(false);
   return (
      <nav className={styles.navMainWrapper}>
         <Container>
            <div className={styles.menuWrapper}>
               <Link to="/" className={styles.logo}>
                  <img src={logo} className="h-20" alt="Course Listing" />
               </Link>
               <button
                  onClick={() => {
                     setDrawdown(!dropdown);
                  }}
                  type="button"
                  className={styles.hamburgerIcon}>
                  <span className="sr-only">Open main menu</span>
                  <svg
                     className="w-5 h-5"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 17 14">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                     />
                  </svg>
               </button>
               <div
                  className={` ${
                     !dropdown ? "hidden" : ""
                  } w-full md:block md:w-auto`}>
                  <ul className={styles.navLists}>
                     <li>
                        <Link
                           to="/"
                           className={styles.navItem}
                           aria-current="page">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           to="/dashboard/profile"
                           className={styles.navItem}
                           aria-current="page">
                           Dashboard
                        </Link>
                     </li>
                     {!email && (
                        <li>
                           <Link
                              to="/login"
                              className={styles.loginBtn}
                              aria-current="page">
                              Login
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </Container>
      </nav>
   );
};

export default Header;
