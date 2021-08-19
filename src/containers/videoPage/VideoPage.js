import "./VideoPage.css";
import * as texts from "../../Utilities/textForApp";
import Button from "../../components/UI/Button/Button";
import VideoImg from "../../Assets/Image11.png";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { useState } from "react";

export const VideoPage = () => {
    const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo)
  };

  return (
    <div className="videoPage" >
      <div className="video">
        <img src={VideoImg} onClick={toggleVideo} />
        <VideoPlayer show={showVideo} cancelVideo={toggleVideo}/>
      </div>
      <div className="content">
        <h2>{texts.VIDEO_H2}</h2>
        <p>{texts.VIDEO_P}</p>
        <Button text={texts.VIDEO_BTN} clicked={toggleVideo} type="watchNow" />
      </div>
    </div>
  );
};
export default VideoPage;
