import React, { useState, useEffect, useCallback } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Videos from "./components/videos";
import YoutubeSearchApi from "./helper/api";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const results = await YoutubeSearchApi.get("아이유");
      for (let video of results.items) {
        setVideos((videos) => [
          ...videos,
          { id: video.id.videoId, snippet: video.snippet },
        ]);
      }
    }
    fetchVideos();
  }, []);

  const handleSearch = useCallback(async (keyword) => {
    setVideos([]);

    // TODO: Need to check if results.items exists
    const results = await YoutubeSearchApi.get(keyword);
    for (let video of results.items) {
      setVideos((videos) => [
        ...videos,
        { id: video.id.videoId, snippet: video.snippet },
      ]);
    }
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Videos videos={videos} />
    </>
  );
};

export default App;
