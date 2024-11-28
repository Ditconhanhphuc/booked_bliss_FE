// eslint-disable-next-line no-unused-vars
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import "./userprofile.scss";
import { listData } from '../../lib/dummydata';
import Card from '../../components/card/card';
import apiRequest from "../../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";

function Profile() {

    const { updateUser, currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await apiRequest.post("/auth/logout");
            updateUser(null)
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }
    const data = listData;

    const handleCreatePost = () => {
        navigate('/CreatePost');
    };

    const handleChat = () => {
        navigate('/Chat');
    }

    // eslint-disable-next-line no-unused-vars
    const boxesData = [
        { title: "Post 1", content: "Content for post 1" },
        { title: "Post 2", content: "Content for post 2" },
        { title: "Post 3", content: "Content for post 3" },

    ];
    
    const handleProfileUpdate = () => {
        navigate('/profile/update');
    }

    return (
        <div>
            <div className="profile-container">
                <div className="cover">
                    <img src="/profile_cover.png" alt="Profile Cover" />
                </div>

                <div className="profile-box">
                    <img src={currentUser.avatar || "noavatar.jpg"} alt="Profile Avatar" className="Avatar" />
                    <div className="user-info">
                        <p className="username">{currentUser.username}</p>
                        <p className="email">{currentUser.email}</p>
                    </div>

                    <div className="btn-side">
                        {/* edit profile btn */}
                        <div className="profile-edit-container">
                            <button className="edit-btn" onClick={handleProfileUpdate}>
                                Edit Profile
                            </button>
                        </div>

                        {/* send message btn */}
                        <div className="send-msg-container">
                            <button className="send-msg-button" onClick={handleChat}>
                                <span className="icon-container">
                                    <img src="/sendmsg.png" alt="sent" className="icon2" />
                                </span>
                            </button>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </div>
            {/* current post section */}
            <div className="align">
                <div className="current-post-tittle">
                    <h1>Your Current Posts</h1>
                </div>
                {/* create new post btn*/}
                <div className="create-post-container">
                    <button className="create-post-button" onClick={handleCreatePost}>
                        <span className="icon-container">
                            <img src="/plus.png" alt="plus" className="icon" />
                        </span>
                        Create New Post
                    </button>
                </div>
            </div>

            {/* current post section */}

            <div className="cardContainter">
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            {/* your saved post section */}

            <div className="saved-post-tittle">
                <h1>Your Saved List</h1>
            </div>
            <div className="cardContainter">
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
