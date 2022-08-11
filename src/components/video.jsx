import React, { memo } from "react";
import styles from "./video.module.css";

const Video = memo(({ video }) => {
  return (
    <div className={styles["container"]}>
      <img
        className={styles["thumbnail"]}
        src={video.snippet.thumbnails.high.url}
        alt="youtube-thumbnail"
      />
      <div className={styles["description-container"]}>
        <div className={styles["description-sub-container"]}>
          <div className={styles["description-video-title"]}>
            {video.snippet.title}
          </div>
          <div className={styles["description-channel-title"]}>
            {video.snippet.channelTitle}
          </div>
          <div className={styles["description-publish-time"]}>
            {video.snippet.publishTime}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Video;
