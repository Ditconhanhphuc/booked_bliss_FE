import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import "./userprofile.scss";
// import BoxContainer from "../../components/boxcontainer/BoxContainer";

function Profile() {
    const navigate = useNavigate();

    const handleCreatePost = () => {
        navigate('/CreatePost');
    };

    const handleAjustAccount = () => {
        navigate('/AdjustAccount');
    };

    const handleChat = () => {
        navigate('/Chat');
    }

    const boxesData = [
        { title: "Post 1", content: "Content for post 1" },
        { title: "Post 2", content: "Content for post 2" },
        { title: "Post 3", content: "Content for post 3" },

    ];

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <div className="cover">
                    <img src="/profile_cover.png" alt="Profile Cover" />
                </div>

                <div className="profile-box">
                    <img src="/profile_ava.png" alt="Profile Avatar" className="Avatar" />
                    <div className="user-info">
                        <p className="username">Simon Doe</p>

                        <p className="DOB">14 Sep 2003</p>
                    </div>

                    <div className="btn-side">
                        {/* edit profile btn */}
                        <div className="profile-edit-container">
                            <button className="edit-btn" onClick={handleAjustAccount}>
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

            <div className="current-post-container">
                {boxesData.map((box, index) => (
                    <div key={index} className="post-box">
                        <h2>{box.title}</h2>
                        <p>{box.content}</p>
                        <div className="post-title">
                            <h1>Phu Nhuan Charme De Cottage</h1>
                            <div className="pt-heading">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/location.png" alt="Area" className="icon" />
                                    Hoa Su St, District Phu Nhuan, Ward 8 HCMC
                                </a>
                            </div>
                            <div className="post-icon">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/area.png" alt="Area" className="icon" />
                                    30x50
                                </a>
                                <a href="#" alt="Bed" className="icon-link">

                                    <img src="/bed.png" alt="Bed" className="icon" />
                                    3
                                </a>
                                <a href="#" alt="Bathroom" className="icon-link">

                                    <img src="/bathroom.png" alt="Bathroom" className="icon" />
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* pending post section */}
            {/* <div className="pending-post-tittle">
                <h1>Your Pending Posts</h1>
            </div>

            <div className="pending-post-container">
                {boxesData.map((box, index) => (
                    <div key={index} className="post-box">
                        <h2>{box.title}</h2>
                        <p>{box.content}</p>
                        <div className="post-title">
                            <h1>Phu Nhuan Charme De Cottage</h1>
                            <div className="pt-heading">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/location.png" alt="Area" className="icon" />
                                    Hoa Su St, District Phu Nhuan, Ward 8 HCMC
                                </a>
                            </div>
                            <div className="post-icon">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/area.png" alt="Area" className="icon" />
                                    30x50
                                </a>
                                <a href="#" alt="Bed" className="icon-link">

                                    <img src="/bed.png" alt="Bed" className="icon" />
                                    3
                                </a>
                                <a href="#" alt="Bathroom" className="icon-link">

                                    <img src="/bathroom.png" alt="Bathroom" className="icon" />
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             */}

  {/* pending post section */}
            <div className="pending-post-tittle">
                <h1>Your Pending Posts</h1>
            </div>
            <div className="current-post-container">
                {boxesData.map((box, index) => (
                    <div key={index} className="post-box">
                        <h2>{box.title}</h2>
                        <p>{box.content}</p>
                        <div className="post-title">
                            <h1>Phu Nhuan Charme De Cottage</h1>
                            <div className="pt-heading">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/location.png" alt="Area" className="icon" />
                                    Hoa Su St, District Phu Nhuan, Ward 8 HCMC
                                </a>
                            </div>
                            <div className="post-icon">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/area.png" alt="Area" className="icon" />
                                    30x50
                                </a>
                                <a href="#" alt="Bed" className="icon-link">

                                    <img src="/bed.png" alt="Bed" className="icon" />
                                    3
                                </a>
                                <a href="#" alt="Bathroom" className="icon-link">

                                    <img src="/bathroom.png" alt="Bathroom" className="icon" />
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* your saved post section */}
            <div className="saved-post-tittle">
                <h1>Your Saved List</h1>
            </div>
            <div className="current-post-container">
                {boxesData.map((box, index) => (
                    <div key={index} className="post-box">
                        <h2>{box.title}</h2>
                        <p>{box.content}</p>
                        <div className="post-title">
                            <h1>Phu Nhuan Charme De Cottage</h1>
                            <div className="pt-heading">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/location.png" alt="Area" className="icon" />
                                    Hoa Su St, District Phu Nhuan, Ward 8 HCMC
                                </a>
                            </div>
                            <div className="post-icon">
                                <a href="#" alt="Area" className="icon-link">
                                    <img src="/area.png" alt="Area" className="icon" />
                                    30x50
                                </a>
                                <a href="#" alt="Bed" className="icon-link">

                                    <img src="/bed.png" alt="Bed" className="icon" />
                                    3
                                </a>
                                <a href="#" alt="Bathroom" className="icon-link">

                                    <img src="/bathroom.png" alt="Bathroom" className="icon" />
                                    2
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
