import React from "react";

const ImgContext = React.createContext({
    path: process.env.PUBLIC_URL
});

export default ImgContext;