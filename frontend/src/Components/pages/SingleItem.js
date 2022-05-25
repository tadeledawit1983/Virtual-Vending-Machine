import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './page.css'
import axios from 'axios'
const SingleItem = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [singleItem, setSingleItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/items/')
            .then(response => {
                const data = response.data;
                const filterSingleItem = data.filter(singleData => singleData._id === id)
                setSingleItem(filterSingleItem[0])

            })
    }, [])
    return (
        <div>
            <div className="single_item">
                <Link to='/' className="home_navigate"><h2>Continue Shopping</h2></Link>
                <h2 className="thankYou">Thank You For Shopping Us!</h2>
                <div className="singleItem_container">

                    <h2 className="product-title">{singleItem.name}</h2>
                    <img className="product-logo" src={singleItem.product_img} alt={singleItem.name} />
                    <p className="product-description"> {singleItem.description}</p>
                    <h1 className="product-price">${singleItem.price}</h1>
                    <button>
                        <a className="download" href={`http://localhost:3001/items/${singleItem._id}`} download target="_blank">Download Receipt</a></button>
                </div>
            </div>
        </div>
    )
}

export default SingleItem
