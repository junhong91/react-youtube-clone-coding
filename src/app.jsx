import React, { useState, useEffect, useCallback } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Videos from "./components/videos";
import YoutubeSearchApi from "./helper/api";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const searchResult = await YoutubeSearchApi.get("아이유");
      if (!searchResult.items) {
        console.log("⛔️ Fetched items are falsy");
        return;
      }

      searchResult.items.map((video) =>
        setVideos((videos) => [
          ...videos,
          { id: video.id.videoId, snippet: video.snippet },
        ])
      );
    }
    fetchVideos();
  }, []);

  const handleSearch = useCallback(async (keyword) => {
    setVideos([]);
    const searchResult = await YoutubeSearchApi.get(keyword);
    if (!searchResult.items) {
      console.log("⛔️ Fetched items are falsy");
      return;
    }

    searchResult.items.map((video) =>
      setVideos((videos) => [
        ...videos,
        { id: video.id.videoId, snippet: video.snippet },
      ])
    );
  }, []);

  const handleClickVideo = useCallback((video) => {
    console.log(video);
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Videos videos={videos} onClick={handleClickVideo} />
    </>
  );
};

export default App;
