import styles from "./CardFoot.module.css";

const CardFoot = () => {
    return (
        <div className={styles.cardfoot_wrapper}>
            <div className={styles.cardfoot_socials}>
                <a href=""><img src="/icons8-facebook-50.png"></img></a>
                <a href=""><img src="/icons8-instagram-50.png"></img></a>
                <a href=""><img src="/icons8-twitter-squared-50.png"></img></a>
            </div>
            <div className={styles.cardfoot_nxtbtn}>
                <button type="button"><img src="/icons8-more-than-50.png"></img></button>
            </div>
        </div>
    )
}

export default CardFoot;