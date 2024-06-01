"use client";

import { useEffect, useState } from "react";
import "/src/app/static-pages/main/styles/EmbedVideo.css";
import ReactPlayer from "react-player";

const EmbedVideo = () => {
  let videosrc = "/media/Phases Presentation.mp4";
  return (
    <div className="EmbedVideo" id="embed-video">
      <div className="embedvideo-whole-container">
        <div className="embed-video-title">
          Visual Overview: Witness the BlockSecure Process
        </div>
        <div className="phases-video">
          <ReactPlayer
            width="650px"
            height="550px"
            url={videosrc}
            controls={true}
          />
          <source src={videosrc} type="video/mp4" />
        </div>
      </div>
    </div>
  );
};

const EmbedVideoWrapper = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <EmbedVideo /> : null;
};

export default EmbedVideoWrapper;

