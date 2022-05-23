import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <Link to="/" className="header-logo">
                    <h1 >COLACO</h1>
                </Link>
                <Link to="/login">
                    <h2>ADMIN</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header
