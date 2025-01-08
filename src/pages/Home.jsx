import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import Video from "../components/VideoCard";

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto bg-[#121212] text-white">
      <Navbar />
      <div className="flex">
        <SideMenu />
        <Video />
      </div>
    </div>
  );
};

export default Home;
