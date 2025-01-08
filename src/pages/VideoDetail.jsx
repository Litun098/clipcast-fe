import CommentList from "../components/CommentList";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import VideoDetails from "../components/VideoDetails";
import VideoList from "../components/VideoList";

const VideoDetail = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <Navbar />
      <div className="flex">
        <SideMenu />
        <div className="flex sm:flex-row flex-col w-full">
          <div className="">
            <VideoDetails />
            <CommentList />
          </div>
          <div className="h-[100px]">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
