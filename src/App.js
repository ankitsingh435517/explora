import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Notifications from "./pages/Notifications";
import VideoPlayer from "./pages/VideoPlayer";
import Videos from "./pages/Videos";

function App() {
  const isAuth = true;
  return (
    <Router>
      {isAuth ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/video/:title" element={<VideoPlayer />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
