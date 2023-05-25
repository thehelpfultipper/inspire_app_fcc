import styles from "./LoadAnimation.module.css";

const LoadAnimation = () => {
  return (
    <div className={styles.preloader_body}>
      <div className={styles.preloader}>
        <div className={styles.preloader_text}>Loading</div>
        <div className={`${styles.preloader_wrapper} ${styles.firstWrap}`}>
          <div className={styles.preloader_dot}></div>
        </div>
        <div className={`${styles.preloader_wrapper} ${styles.secondWrap}`}>
          <div className={styles.preloader_dot}></div>
        </div>
        <div className={`${styles.preloader_wrapper} ${styles.thirdWrap}`}>
          <div className={styles.preloader_dot}></div>
        </div>
        <div className={`${styles.preloader_wrapper} ${styles.fourthWrap}`}>
          <div className={styles.preloader_dot}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadAnimation;
