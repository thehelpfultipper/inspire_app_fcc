import styles from "./CardBody.module.css";

const CardBody = (props) => {
  let { text, author } = props.quote;
console.log(text.length)
  return (
    <div className={styles.cardbody_wrapper}>
      <p className={`${styles.cardbody_text} ${styles.md_text}`}>{text}</p>
      <div className={styles.cardbody_separator}></div>
      <p className={styles.cardbody_author}>{author}</p>
    </div>
  );
};

export default CardBody;
