import styles from "./CardFoot.module.css";

const CardFoot = () => {
    return (
        <div className={styles.cardfoot_wrapper}>
            <div className={styles.cardfoot_socials}></div>
            <div className={styles.cardfoot_nxtbtn}></div>
        </div>
    )
}

export default CardFoot;