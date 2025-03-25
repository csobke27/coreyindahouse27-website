import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import MainLogo from '../../assets/images/Logo_Image 1.png';

import "./navigation.styles.scss";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <div className="navigation-container">
                <div className="logo">
                    <Link to="/"><img src={MainLogo} alt="Logo" className="logo"/></Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/twitch">Twitch</Link>
                    <Link className="nav-link" to="/services">YouTube</Link>
                    <Link className="nav-link" to="/merch">Merch</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;