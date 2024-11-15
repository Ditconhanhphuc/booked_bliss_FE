import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import Profile from "./Routes/UserProfile/userProfile";
import Chat from "./Routes/Chat/Chat"
import CreatePost from "./Routes/CreatePost/CreatePost";
import AdjustAccount from "./Routes/AdjustAccount/AdjustAccount";
import LandingPage from "./Routes/LandingPage/LandingPage";


function App() {
  return (
    <Router>
    <div className="layout">
      <Navbar/>
      {/* <Profile/> */}
    <Routes>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Chat" element={<Chat/>}/>
        <Route path="/CreatePost" element={<CreatePost/>}/>
        <Route path="/AdjustAccount" element={<AdjustAccount/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
      </Routes>
    </div>
    </Router>
  )
  
}

export default App