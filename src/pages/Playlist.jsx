import Navbar from "../components/Navbar";
import PlaylistVideo from "../components/PlaylistVideo";
import SideMenu from "../components/SideMenu";

const Playlist = () => {
  return (
    <div>
      <Navbar />
      <div className="flex grid-cols-3">
        <SideMenu/>
        <PlaylistVideo/>
      </div>
    </div>
  );
};

export default Playlist;
