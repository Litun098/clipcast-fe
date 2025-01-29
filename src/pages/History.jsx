import { useEffect, useState } from "react";

import axios from "axios";

import ErrorComponent from "../components/ErrorComponent";
import Navbar from "../components/Navbar";
import NoVideo from "../components/NoVideo";
import SideMenu from "../components/SideMenu";
import VideoList from "../components/VideoList";

const History = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("/api/v1/users/history")
      .then((response) => {
        setHistory(response?.data?.data);
      })
      .catch((err) => {
        const errObj =
          err?.response || err?.message || "An unexpected error occurred.";
        setError(errObj);
      });
  }, []);

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

  if (history.length == 0) {
    return (
      <>
        <Navbar />
        <div className="flex">
          <SideMenu />
          <NoVideo />
        </div>
      </>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-2">
        <SideMenu />
        <div className="flex flex-wrap">
          {history.map((video) => (
            <VideoList key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
