import { useContext } from "react";
import NextContext from "../../context/next-context";

import styles from "./CardBody.module.css";

const CardBody = () => {
  let ctx = useContext(NextContext);

  let { text, author } = ctx.quote,
    textSize;

  !text &&
    (text = "Don't let others tell you silence is golden." && (author = "THT"));
  // correct for strange new api value ", type.fit" on author
  author.includes(',') && (author = author.split(',')[0]);
  (author.toLowerCase().includes('type.fit') || !author) && (author = "Anonymous");

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
