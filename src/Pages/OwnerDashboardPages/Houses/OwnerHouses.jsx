import { IoBed } from "react-icons/io5";
import { MdBathtub } from "react-icons/md";
import Ratings from "../../../Components/Ratings/Ratings";
import styles from "./styles.module.css";

const OwnerHouses = () => {
   return (
      <div>
         <div className={styles.gridMain}>
            <div className={styles.houseCard}>
               <div
                  className={styles.cardThumbnail}
                  style={{
                     backgroundImage: `url('https://htmlguru.net/house-rent/assets/images/apartment/apartment-two.png')`,
                     backgroundPosition: "center center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                  }}></div>
               <div className="p-5">
                  <h5 className={styles.cardTitle}>Family Apartment</h5>

                  <p className={styles.location}>Dhanmondi, Dhaka</p>
                  <Ratings />
                  <p className={styles.housePrice}>$200</p>
                  <div className={styles.cardFooterWrapper}>
                     <div className={styles.cardMetaData}>
                        <IoBed />
                        03 Bedrooms
                     </div>
                     <div className={styles.cardMetaData}>
                        <MdBathtub />
                        02 Bathrooms
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OwnerHouses;
