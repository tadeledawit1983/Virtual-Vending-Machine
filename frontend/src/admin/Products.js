import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
const Products = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://virtual-vending.herokuapp.com/items/')
            .then(response => setItems(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2 className="link"><Link to="/newitem" style={{ color: '#4738a7' }}>Add new Item</Link></h2>
            <h1 style={{ marginBottom: '40px' }}>WELCOME TO COLACO!</h1>
            <div className="product-container">
                {items.map(item => ((
                    <div key={item._id} className="product">
                        <h2 className="product-title">{item.name}</h2>
                        <img className="product-logo" src={item.product_img} alt={item.name} />
                        <h1 className="product-price">${item.price}</h1>
                        <Link to={`/update/${item._id}`}><button onClick={() => navigate('/login')} className="product-btn">Update Item</button></Link>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Products