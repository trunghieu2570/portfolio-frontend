import React, { useEffect, useState } from 'react';

const NavBar = (props) => {
    const [className, changeClassName] = useState("bg-trans");

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

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg ${className} navbar-light py-3 px-5`}>
                <a className="navbar-brand" href="#!">Trung Hieu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
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
                            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#!">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-link d-none d-md-block">Follow me</div>
            </nav>
        </div>
    );
}

export default NavBar;
