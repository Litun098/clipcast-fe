import { useEffect, useState } from "react";

import axios from "axios";

import ErrorComponent from "../components/ErrorComponent";
import Navbar from "../components/Navbar";
import NoVideo from "../components/NoVideo";
import SideMenu from "../components/SideMenu";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const { error, setError } = useState(null);
  useEffect(() => {
    axios
      .get("/api/v1/videos")
      .then((response) => {
        console.log(response.data.data);
        setVideos(response.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [setError, setVideos]);

  if (error) {
    console.log(error);
    return (
      <>
        <Navbar />
        <div className="flex">
          <SideMenu />
          <ErrorComponent errorMessage={error} />
        </div>
      </>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideMenu />
        {videos ? (
          <div className="flex flex-wrap flex-shrink gap-4 place-content-center">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <NoVideo />
        )}
      </div>
    </div>
  );
};

export default Home;
