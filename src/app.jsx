import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Videos from "./components/videos";
import YoutubeSearchApi from "./helper/api";

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = useCallback(async (keyword) => {
    const results = await YoutubeSearchApi.get(keyword);
    console.log(results.items);
    // TODO: Need to check if results.items exists
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
