import React from 'react'
import { useNavigate } from 'react-router-dom'
const Add_update = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button className="add_btn" onClick={() => navigate('/update')}>UPDATE EXISTING ITEMS</button>
            <button className="add_btn" onClick={() => navigate('/newitem')}>ADD NEW ITEMS</button>
            <h1 className="colaco">COLACO VIRTUAL VENDING MACHINE</h1>
        </div>
    )
}

export default Add_update
