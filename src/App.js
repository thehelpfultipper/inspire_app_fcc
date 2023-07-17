import { useEffect, useState } from "react";
import BackgroundImage from './Components/BackgroundImage';

import './App.css';

const IMAGES = [],
      QUOTES = [];

let { REACT_APP_UNSPLASH_KEY } = process.env;

function App() {
  const [images, setImages] = useState(IMAGES);
  const [quotes, setQuotes] = useState(QUOTES);

  const fetchImgDetails = async (id) => {
    let res = await fetch(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${REACT_APP_UNSPLASH_KEY}`,
      },
    });

    let image = await res.json();

    return {
      id: image.id,
      alt: image.alt_description,
      url: image.urls.regular,
      link: image.links.html,
      local: {
        name: image.location.name,
        city: image.location.city,
        country: image.location.country,
      },
    };
  };

  const fetchImages = async () => {
    let searchTerms = [
      'pastel', 
      'eastern asia', 
      'nature background', 
      'tropical sunset',
      'tropical', 
      'light pink'
    ];

    let q = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    let res = await fetch(
      `https://api.unsplash.com/search/photos?orientation=landscape&query=${q}&sig=${Math.floor(Math.random())}`,
      {
        headers: {
          Authorization: `Client-ID ${REACT_APP_UNSPLASH_KEY}`,
        },
      }
    );

    let images = await res.json();

    let allImages = [];

    // Get details for each image
    for (let img of images.results) {
      let details = await fetchImgDetails(img.id); // single img details {}
      allImages.push(details);
    }

    setImages(allImages);
  };

  const fetchQuotes = async () => {
    let res = await fetch("https://type.fit/api/quotes");
    let quotes = await res.json();

    setQuotes(quotes);
  };

  useEffect(() => {
    fetchImages();
    fetchQuotes();
  }, []);
  
  return <BackgroundImage images={images} quotes={quotes} />;
}

export default App;
