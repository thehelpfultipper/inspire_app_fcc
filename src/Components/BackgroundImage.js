import Card from "./Card/Card";

import styles from "./BackgroundImage.module.css";

const BackgroundImage = (props) => {
  return (
    <div>
      <Card />
      <div className={styles.bgimg_location_link}>
        <a>Location</a>
      </div>
    </div>
  );
};

export default BackgroundImage;
