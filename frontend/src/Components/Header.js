import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <Link to="/" className="header-logo">
                    <h1 >ColaCo</h1>
                </Link>
                <Link to="/additem">
                    <h1>Add Item</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header
