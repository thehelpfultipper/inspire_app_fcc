import { useState } from "react";
import Card from "./Card/Card";
import NextContext from "../context/next-context";
import LoadAnimation from "./LoadAnimation";

import styles from "./BackgroundImage.module.css";

const getRdmItem = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const BackgroundImage = (props) => {
  let [randomImg, setRandomImg] = useState();
  let [randomQuote, setRandomQuote] = useState();

  if (props.images.length > 0 && props.quotes.length > 0) {
    randomImg = getRdmItem(props.images);
    randomQuote = getRdmItem(props.quotes);
  } else {
    return <LoadAnimation></LoadAnimation>;
  }

  let {
      local: { city, country, name },
    } = randomImg,
    place;

  if ((!city && !country && !name) || !city || !country) {
    place = "Photo on Unsplash";
  } else if (name) {
    place = name;
  } else if (country && city) {
    place = `${city}, ${country}`;
  }

  const nextReqHandler = () => {
    let newRandomImg = getRdmItem(props.images),
      newRandomQuote = getRdmItem(props.quotes);

    setRandomImg(newRandomImg);
    setRandomQuote(newRandomQuote);
  };

  return (
    <div
      className={styles.bgimg_main_wrapper}
      style={{ backgroundImage: `url(${randomImg.url})` }}
    >
      <NextContext.Provider
        value={{ quote: randomQuote, nxtBtn: nextReqHandler }}
      >
        <Card />
      </NextContext.Provider>
      <div className={styles.bgimg_location_link}>
        <a href={randomImg.link} target="_blank" rel="noreferrer">
          {place}
        </a>
      </div>
    </div>
  );
};

export default BackgroundImage;
