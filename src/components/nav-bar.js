import React, { useEffect, useState } from 'react';

const NavBar = (props) => {
    const [className, changeClassName] = useState("bg-trans navbar-dark");

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                if (props.homePage)
                    changeClassName("bg-dark navbar-dark");
                else
                    changeClassName("bg-dark navbar-dark");
            } else {
                if (props.homePage)
                    changeClassName("bg-trans navbar-dark");
                else
                    changeClassName("bg-trans navbar-light");
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [className, changeClassName, props.homePage]);

    return (
        <div>
            <nav class={`navbar fixed-top navbar-expand-lg ${className} py-3 px-5`}>
                <a class="navbar-brand" href="#!">Trung Hieu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#posts" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Blog
        </a>
                            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#!">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-link text-white">Follow me</div>
            </nav>
        </div>
    );
}

export default NavBar;
