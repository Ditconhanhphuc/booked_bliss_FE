import { useState } from "react";
import "./navbar.scss"

function Navbar() {
    const [open, setOpen] = useState(false)
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
                <a href="/login" className="sign">Sign In</a>
                <a href="/register" className="sign">Sign Up</a>
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
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