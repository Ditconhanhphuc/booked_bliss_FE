import Navbar from "../../components/navbar/Navbar";
import { useNavigate, Link, useLoaderData, Await } from 'react-router-dom';
import "./userprofile.scss";
import apiRequest from "../../lib/apiRequest";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import List from "../../components/list/List";

function Profile() {
    const data = useLoaderData();

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
    // const data = listData;

    const handleChat = () => {
        navigate('/Chat');
    }

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
                    <Link to={`/add`}>
                        <button className="create-post-button">
                            <span className="icon-container">
                                <img src="/plus.png" alt="plus" className="icon" />
                            </span>
                            Create New Post
                        </button>
                    </Link>
                </div>
            </div>

            <Suspense fallback={<p>Loading posts...</p>}>
                <Await
                    resolve={data.postResponse}
                    errorElement={<p>Error loading posts!</p>}
                >
                    {(postResponse) =>
                        // {data.map(item => (
                        //     <Card key={item.id} item={item} />
                        // ))}
                        <List posts={postResponse.data.userPosts} />
                    }
                </Await>
            </Suspense>

            {/* current post section */}
            {/* your saved post section */}

            <div className="saved-post-tittle">
                <h1>Your Saved List</h1>
            </div>
            {/* {data.map(item => (
                    <Card key={item.id} item={item} />
                ))} */}
            <Suspense fallback={<p>Loading posts...</p>}>
                <Await
                    resolve={data.postResponse}
                    errorElement={<p>Error loading posts!</p>}
                >
                    {(postResponse) =>
                        // {data.map(item => (
                        //     <Card key={item.id} item={item} />
                        // ))}
                        <List posts={postResponse.data.savedPosts} />
                    }
                </Await>
            </Suspense>
        </div>
    );
}

export default Profile;
