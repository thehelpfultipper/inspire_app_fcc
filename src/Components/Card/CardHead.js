import { useContext } from "react";
import ImgContext from "../../context/img-context";

import styles from "./CardHead.module.css";

const CardHead = () => {
    let {path} = useContext(ImgContext);

    return (
        <div className={styles.cardhead_wrapper}>
            <img src= {path + "/icons8-quote-left-96.png"} alt=""></img>
        </div>
    )
}

export default CardHead;