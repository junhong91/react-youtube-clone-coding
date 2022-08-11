import React from "react";
import Video from "./video";
import styles from "../post-css/videos.module.css";

const Videos = ({ videos }) => {
  return (
    <ul className={styles["videos-container"]}>
      {videos.map((video) => (
        <Video key={video?.id} video={video} />
      ))}
    </ul>
  );
};

export default Videos;
