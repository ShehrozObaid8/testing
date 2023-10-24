import React, { useState } from 'react';
import './style.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`navbar ${isOpen ? 'active' : ''}`}>
                <div className="menu-toggle" onClick={toggleNavbar}>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                </div>
                <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/signup'}>Signup</Link>
                    </li>
                    <li>
                        <Link to={'/postadform'}>Post Ad</Link>
                    </li>
                </ul>
            {/* <Outlet/> */}
            </div>
        </div>
    );
}