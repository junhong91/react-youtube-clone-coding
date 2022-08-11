import React, { memo } from "react";
import styles from "./video.module.css";

const Video = memo(({ video }) => {
  return (
    <div className={styles["container"]}>
      <img
        className={styles["thumb-nail"]}
        src={video.snippet.thumbnails.high.url}
        alt="test-logo"
      />
      <div className={styles["description-container"]}>
        <div className={styles["sub-description"]}>
          <div>{video.snippet.title}</div>
          <div>{video.contents}</div>
        </div>
      </div>
    </div>
  );
});
export default Video;
