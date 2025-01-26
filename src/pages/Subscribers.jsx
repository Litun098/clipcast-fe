import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import UserCard from "../components/UserCard";
import UserProfile from "../components/UserProfile";

const History = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-2">
        <SideMenu />
        <div className="w-full">
          <UserProfile />
          <div className="mx-5">
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
