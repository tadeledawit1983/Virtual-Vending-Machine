import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Navigation = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Thank You for shopping us!</h1>
            <button className="btn" onClick={() => navigate('/')}>continue shopping</button>
        </div >
    )
}

export default Navigation