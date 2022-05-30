import React from 'react'
import { useNavigate } from 'react-router-dom'
export const SuccessMessage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Item Seccessfuly Added To Stock!</h1>
            <button className="btn" onClick={() => navigate('/')}>Back to Home Page</button>
        </div >
    )
}

export default SuccessMessage