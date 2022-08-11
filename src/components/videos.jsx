import React from "react";
import Video from "./video";
import styles from "./videos.module.css";

const Videos = ({ videos }) => {
  return (
    <ul className={styles.container}>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default Videos;
