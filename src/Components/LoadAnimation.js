import styles from "./LoadAnimation.module.css";

const LoadAnimation = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader_text}>Loading</div>
      <div className={`${styles.preloader_wrapper} ${styles.firstWrapper}`}>
        <div className={styles.preloader_dot}></div>
      </div>
      <div className={`${styles.preloader_wrapper} ${styles.secondWrapper}`}>
        <div className={styles.preloader_dot}></div>
      </div>
      <div className={`${styles.preloader_wrapper} ${styles.thirdWrapper}`}>
        <div className={styles.preloader_dot}></div>
      </div>
      <div className={`${styles.preloader_wrapper} ${styles.fourthWrapper}`}>
        <div className={styles.preloader_dot}></div>
      </div>
    </div>
  );
};

export default LoadAnimation;
