import styles from "./CardBody.module.css";

const CardBody = (props) => {
  let { text, author } = props.quote,
    textSize;

  if (text.length > 175) {
    textSize = "1.3em";
  } else if (text.length > 110) {
    textSize = "1.4em";
  } else {
    textSize = "1.5em";
  }

  return (
    <div className={styles.cardbody_wrapper}>
      <p className={styles.cardbody_text} style={{ fontSize: textSize }}>
        {text}
      </p>
      <div className={styles.cardbody_separator}></div>
      <p className={styles.cardbody_author}>{author}</p>
    </div>
  );
};

export default CardBody;
