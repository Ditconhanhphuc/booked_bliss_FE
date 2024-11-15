import "./adjustaccount.scss";
import "../CreatePost/createpost.scss"
import { useNavigate } from 'react-router-dom';

const AdjustAccount = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/Profile'); // Navigate back to the Profile page
    };

  return (
    <div>
         <div className="return-btn" onClick={handleReturn}>
                <button className="return-caret-button" aria-label="Return to Profile">
                    <span className="icon-container1">
                        <img src="/caret_left.png" alt="caret-l" className="icon1" />
                    </span>
                </button>
            </div>
            
    <div className="adjust-personal-info">
      <h2>Adjust Personal Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" placeholder="Enter your address" required></textarea>
        </div>
        
        <button type="submit">Submit</button>
      </form>

      <div className="verify-account">
        <button type="button">Verify Account</button>
      </div>
    </div>
    </div>
  );
};

export default AdjustAccount;