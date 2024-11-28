import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./chat.scss";
import Avatar from "../../components/avatar/Avatar";
// import BackSiteButton from "../../components/backsite/backsite";



function ChatSite() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "hule", type: "received" },
        { text: "chaoem", type: "sent" },
    ]);

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/Profile');
    };


    const [searchTerm, setSearchTerm] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                { text: message, type: "sent" },
            ]);
            setMessage("");
        }
    };


    return (
        <div className="chat-content">
            <div className="return-btn" onClick={handleReturn}>
                <button className="return-caret-button" aria-label="Return to Profile">
                    <div className="icon-container1">
                        <img src="/caret_left.png" alt="caret-l" className="icon1" />
                    </div>
                </button>
            </div>

            <div className="chat-container">
                <div className="chat-history">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for someone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="recent-user-1">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>

                    <div className="recent-user-2">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>

                    <div className="recent-user-3">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>

                    <div className="recent-user-4">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>

                    <div className="recent-user-5">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>

                    <div className="recent-user-6">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                        <span>User Name</span>
                        <p>abcxynuznujkn</p>
                    </div>


                </div>

                <div className="message-pop">

                    <div className="message-history-title">
                        <Avatar src="/user-avatar.png" alt="UserAvatar" size={50} />
                        <span>User Name</span>
                    </div>

                    <div className="message-history">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.type === "sent" ? "sent" : "received"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="current-message">
                        <div className="message-input">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Send a message"
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ChatSite;
