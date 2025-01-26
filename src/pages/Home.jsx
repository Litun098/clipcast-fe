import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <VideoCard />
      </div>
    </div>
  );
};

export default Home;
