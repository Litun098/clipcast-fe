import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import VideoList from "../components/VideoList";

const LikedVideo = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <VideoList />
      </div>
    </div>
  );
};

export default LikedVideo;
