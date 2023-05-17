import { useContext } from "react";
import NextContext from "../../context/next-context";

import styles from "./CardFoot.module.css";

const CardFoot = () => {
  let ctx = useContext(NextContext);
  return (
    <div className={styles.cardfoot_wrapper}>
      <div className={styles.cardfoot_socials}>
        <a href="https://thehelpfultipper.com/" target="_blank" rel="noreferrer">
          <img src="/tht-logo-nobg-90.png" alt=""></img>
        </a>
        <a href="https://www.instagram.com/dm.tht/?hl=en" target="_blank" rel="noreferrer">
          <img src="/icons8-instagram-90.png" alt=""></img>
        </a>
        <a href="https://pinterest.com/thehelpfultipper/_created/" target="_blank" rel="noreferrer">
          <img src="/icons8-pinterest-96.png" alt=""></img>
        </a>
        <a href="www.linkedin.com/in/kmerkuri97" target="_blank" rel="noreferrer">
          <img src="/icons8-linkedin-96.png" alt=""></img>
        </a>
      </div>
      <div className={styles.cardfoot_nxtbtn}>
        <button type="button" onClick={ctx.nxtBtn}>
          <img src="/icons8-more-than-50.png" alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default CardFoot;
