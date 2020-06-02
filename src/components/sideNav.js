import React, { Component } from 'react';
import Avatar from '../images/avatar.png';
import { Link } from "gatsby"

class SideNav extends Component {
    render() {
        return (
            <div className="sidebar-wrapper text-center d-none d-md-block">
                <div className='sidebar-name my-2'>Trung Hieu</div>
                <img className='sidebar-avatar my-2' src={Avatar} alt='Avatar' />
                <p className='sidebar-quote mx-4 my-2'>
                    Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!
                </p>
                <div className='sidebar-menu my-4 text-left mx-auto'>
                    <ul>
                        <li className='sidebar-menu-link'>
                            <Link>About Me</Link>
                        </li>
                        <li className='sidebar-menu-link'>
                            <Link>Portfolio</Link>
                        </li>
                        <li className='sidebar-menu-link'>
                            <Link>Resume</Link>
                        </li>
                        <li className='sidebar-menu-link'>
                            <Link>Blog</Link>
                        </li>
                        <li className='sidebar-menu-link'>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav;