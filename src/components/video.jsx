import React, { memo } from "react";
import styles from "../post-css/video.module.css";

const Video = memo(({ video }) => {
  return (
    <div className={styles["video-container"]}>
      <img
        className={styles["video-thumbnail"]}
        src={video?.snippet?.thumbnails?.high?.url}
        alt="youtube-thumbnail"
      />
      <div className={styles["video-description-container"]}>
        <div className={styles["video-description-sub-container"]}>
          <div className={styles["video-description-title"]}>
            {video?.snippet?.title}
          </div>
          <div className={styles["video-description-channel-title"]}>
            {video?.snippet?.channelTitle}
          </div>
          <div className={styles["video-description-publish-time"]}>
            {video?.snippet?.publishTime}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Video;
