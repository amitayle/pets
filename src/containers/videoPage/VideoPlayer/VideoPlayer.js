import React from "react";
import classes from "./VideoPlayer.module.css";

const VideoPlayer = ({ show, cancelVideo }) => {
  const backClass = show ? classes.back : classes.no;

  let src = show
    ? "https://www.youtube.com/embed/GBZnnOe_n5g?controls=0&autoplay=1&showinfo=0&rel=0&start=1"
    : "";
  return (
    <>
      <div className={backClass} onClick={cancelVideo}></div>
      <div
        className={classes.videoPlayer}
        style={{
          opacity: show ? "1" : "0",
          transform: show ? "translateY(0)" : "translateY(-300vh)",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
        ></iframe>
      </div>
    </>
  );
};

export default VideoPlayer;
