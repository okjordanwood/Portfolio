import React, { useEffect } from "react";
import { startSwirl } from "./swirl";
import "../../styles/swirl.css";

const SwirlWrapper = () => {
  useEffect(() => {
    console.log("Swirl canvas mounting");
    const container = document.querySelector(".content--canvas");
    if (container) startSwirl(container);
  }, []);

  return <div className="content--canvas" />;
};

export default SwirlWrapper;
