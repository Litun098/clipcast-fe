
import Navbar from "../components/Navbar"
import SideMenu from "../components/SideMenu"
import UserProfile from "../components/UserProfile"

const Profile = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="flex gap-2">
        <SideMenu/>
        <UserProfile/>
      </div>
    </>
  )
}

export default Profile
