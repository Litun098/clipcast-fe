import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import VideoList from '../components/VideoList'

const History = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-2">
        <SideMenu/>
        <VideoList />
      </div>
    </div>
  )
}

export default History
