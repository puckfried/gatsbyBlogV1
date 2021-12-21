import React from 'react'
import { Link } from 'gatsby'
import {navLinks, navLinkItem, navLinkText} from './navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText}>HOME</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/about' className={navLinkText}>ABOUT</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>BLOG</Link>
                </li>
            </ul>
        </div>
    )
}
