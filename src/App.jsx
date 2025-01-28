
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import History from "./pages/History";
import Home from "./pages/Home";
import LikedVideo from "./pages/LikedVideo";
import Login from "./pages/Login";
import MyContent from "./pages/MyContent";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Subscribers from "./pages/Subscribers";

function App() {
  return (
    <Router>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/mycontent" element={<MyContent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/profile/:slug" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/liked-videos" element={<LikedVideo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
