import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./chat.scss";
import Avatar from "../../components/avatar/Avatar";

function ChatSite() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "hule", type: "received" },
        { text: "chaoem", type: "sent" },
    ]);
    const [showHistory, setShowHistory] = useState(false); // New state to toggle view
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/Profile");
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, type: "sent" }]);
            setMessage("");
        }
    };

    const toggleHistory = () => {
        setShowHistory(!showHistory);
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

            <div className={`chat-container ${showHistory ? "show-history" : ""}`}>
                <div className="chat-history">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for someone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`recent-user-${i + 1}`}
                            onClick={toggleHistory} // Show message-pop when clicked
                        >
                            <Avatar src="/user-avatar.png" alt="UserAvatar" size={40} />
                            <span>User Name</span>
                            <p>abcxynuznujkn</p>
                        </div>
                    ))}
                </div>

                <div className="message-pop">
                    <div className="message-history-title" onClick={toggleHistory}>
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
