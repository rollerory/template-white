import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import MenuBtn from "@/assets/images/menu-btn.svg";
import "./header.scss";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuItemClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <nav className="header__menu">
                        {isMobile && (
                            <button
                                className="header__menu-btn"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <img src={MenuBtn} alt="menu button" />
                            </button>
                        )}
                        <ul className={`header__menu-list ${isMobile && !isMenuOpen ? 'hidden' : ''}`}>
                            <li className="header__menu-item" onClick={handleMenuItemClick}>
                                <Link to="/#header">Home</Link>
                            </li>
                            <li className="header__menu-item" onClick={handleMenuItemClick}>
                                <Link to="/about#header">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
