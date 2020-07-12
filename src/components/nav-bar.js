import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "bg-trans navbar-dark",
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (this.props.homePage)
                this.setState({ className: "bg-dark navbar-dark" });
            else
                this.setState({ className: "bg-dark navbar-dark" });
        } else {
            if (this.props.homePage)
                this.setState({ className: "bg-trans navbar-dark" });
            else
                this.setState({ className: "bg-trans navbar-light" });
        }

    }


    render() {
        return (
            <div>
                <nav class={`navbar fixed-top navbar-expand-lg ${this.state.className} py-3 px-5`}>
                    <a class="navbar-brand" href="#">Trung Hieu</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-link text-white">Follow me</div>
                </nav>
            </div>
        );
    }
}

NavBar.propTypes = {

}

export default NavBar;
