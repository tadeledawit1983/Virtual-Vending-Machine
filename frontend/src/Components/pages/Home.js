import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('https://virtual-vending.herokuapp.com/items/')
            .then(response => setItems(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1 style={{ marginBottom: '40px' }}>WELCOME TO COLACO!</h1>
            <div className="product-container">
                {items.map(item => ((
                    <div key={item._id} className="product">
                        <h2 className="product-title">{item.name}</h2>
                        <img className="product-logo" src={item.product_img} alt={item.name} />
                        <h1 className="product-price">${item.price}</h1>
                        <Link to={`/${item._id}`}><button className="product-btn">Buy</button></Link>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default Home