import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss"

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;
    return (
        <nav>
            <div className="navbar-left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>Booked Bliss</span>
                </a>
            </div>
            <div className="navbar-center">
                <a href="/">Agents</a>
                <a href="/">Type of House</a>
                <a href="/">Contact Us</a>
                <a href="/">Cooperation</a>
            </div>
            <div className="navbar-right">
                {user ? (
                    <div className="user">
                        <img src="https://ca-times.brightspotcdn.com/dims4/default/6afee51/2147483647/strip/true/crop/3600x2405+0+0/resize/1200x802!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F13%2F95%2F22c003484d9b867fe7d0093eb0a4%2Fbridgerton-108-unit-00543r.jpg" alt="" />
                        <span>Simon Basset</span>
                        <Link className="profile" to="/profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="/login" className="sign">Sign In</a>
                        <a href="/register" className="sign">
                            Sign Up
                        </a>
                    </>
                )}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Agents</a>
                    <a href="/">Type of House</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Cooperation</a>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;