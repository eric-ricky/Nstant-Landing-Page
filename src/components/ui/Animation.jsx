import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Delivery from "../../assets/animation/delivery_guy.json";

const Animation = ({ content }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: content,
    });
  }, []);

  return <div ref={container}></div>;
};

export default Animation;
