import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import SideNav from './side-nav';

const NavBar = (props) => {
    const [className, changeClassName] = useState("bg-trans");
    const [showSideBar, toggleSideBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                changeClassName("bg-light");
            } else {
                changeClassName("bg-trans");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [className, changeClassName]);

    useEffect(() => {

    }, [showSideBar, toggleSideBar]);

    return (
        <div>

            <nav className={`navbar fixed-top navbar-expand-lg ${className} navbar-light py-3 px-5`}>
                <a className="navbar-brand" href="/">Trung Hieu</a>
                <button className="navbar-toggler" type="button" onClick={() => toggleSideBar(true)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#posts" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
                        </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                
                <SideNav width={showSideBar ? "100%" : "0%"} onClose={() => toggleSideBar(false)} />
            </nav>
            
        </div>
    );
}

export default NavBar;
