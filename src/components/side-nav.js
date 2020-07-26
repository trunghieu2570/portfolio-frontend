import React from 'react';
import PropTypes from 'prop-types';

const SideNav = (props) => {
    return (
        <>
            <div class="sidenav" style={{ width: props.width }}>
                <a href={null} class="btn-close" onClick={props.onClose}>&times;</a>
                <a onClick={props.onClose} href="/#home">Home <span className="sr-only">(current)</span></a>
                <a onClick={props.onClose} href="/#resume">Resume</a>
                <a onClick={props.onClose} href="/#portfolio">Portfolio</a>
                <a onClick={props.onClose} href="/#posts" >
                    Blog
                                </a>
                <a onClick={props.onClose} href="/#contact">Contact</a>

            </div>
        </>
    );
}

SideNav.defaultProps = {
    width: "0%",
    onClose: () => { },
}

SideNav.propTypes = {
    width: PropTypes.string,
    onClose: PropTypes.func,
}

export default SideNav;